// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let money = {};
    let curr = currency;
    if (currency > 10000){
        money.error = "You are rich, my friend! We don't have so much coins for exchange";  
    }
    else 
        {
        if(Math.floor((curr/50).toFixed(3))>0){money.H = Math.floor((curr/50).toFixed(3));};
        curr %=50;
        if(Math.floor((curr/25).toFixed(3))>0){money.Q = Math.floor((curr/25).toFixed(3));};
        curr %=25;
        if(Math.floor((curr/10).toFixed(3))>0){money.D = Math.floor((curr/10).toFixed(3));};
        curr %=10;
        if(Math.floor((curr/5).toFixed(3))>0){money.N = Math.floor((curr/5).toFixed(3));};
        curr %=5;
        if(curr > 0){money.P = curr;};
    };
        return money;
}