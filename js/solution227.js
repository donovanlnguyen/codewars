// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
var maxProfit = function(prices) {
    let maxProfit = 0

    for(let buyPrice = 0; buyPrice < prices.length; buyPrice++){
    
    for(let sellPrice = buyPrice + 1; sellPrice < prices.length; sellPrice++){
        let profit = prices[sellPrice] - prices[buyPrice]

        maxProfit = Math.max(maxProfit, profit)
    }
    }
    return maxProfit
};

// var maxProfit = function(prices) {
//     let maxProfit = 0
//     let minPrice = prices[0]

//     for(let sell = 1; sell < prices.length; sell++){
//         let sellPrice = prices[sell]
//         let profit = sellPrice - minPrice

//         maxProfit = Math.max(maxProfit, profit)
//         if(sellPrice < minPrice) minPrice = sellPrice
//     }
//     return maxProfit
// };