// We want an array, but not just any old array, an array with contents!
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 
// 0 to 4:
const arr = N => {
    const arr = []
    for (let i = 0; i < N; i+=1){
      arr.push(i)
    }
    return arr;
  }