// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

// billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((prev,curr) => prev + curr, 0)


function billboard(name, price = 30){

    let totalCost = 0;
    for(i=0; i<name.length; i++){
        totalCost += price;
    } 
    
    return totalCost;
    
}

// create a new arrary
// create a loop that goes through name
// each index get added to price, sent to the new arrary
// once its done it returns the new arrary