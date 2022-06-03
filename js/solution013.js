//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//Mind the input validation.

function sumArray(array) {
    return !array || array.length == 0 ? 0 : array.sort((a, b) => a - b).slice(1, array.length - 1).reduce((res, n) => res + n,0);
}

//function sumArray(array) {
//   return Array.isArray(array) && array.length > 1
//     ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//      : 0
//  }