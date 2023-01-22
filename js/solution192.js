// Write a function that takes a positive integer n, 
// sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.
function sumCubes(n){
    let sum = 0
    for(i = 0; i <=n; i++){
      sum += Math.pow(i, 3)
    }
    return sum
}

//   function sumCubes(n){
//     if (n == 1) {
//       return n**3;
//     } else {
//       return n**3 + sumCubes(n - 1);
//     }
//   }