// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
var min = function(list){
    let minValue = Math.min(...list)
    return minValue
}

var max = function(list){
    let maxValue = Math.max(...list)
    return maxValue
    
}