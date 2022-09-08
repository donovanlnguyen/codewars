// Your task is to sum the differences between 
// consecutive pairs in the array in descending order.
sumOfDifferences = arr => arr.length <= 1 ? 0 : Math.max(...arr) - Math.min(...arr)