// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
function sumMix(x){
    const arrOfNums = x.map(str =>{
      return Number(str);
    })
    let sum = arrOfNums.reduce((a,b) => a + b, 0)
    return sum
  }

//   function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }