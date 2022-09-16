// Find the mean (average) of a list of numbers in an array.
var findAverage = function (nums) {
    let total = nums.reduce((a, b) => a + b)
    let average = total/nums.length
    return average
  }