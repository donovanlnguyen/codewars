// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. 
// If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.
// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.
function pickIt(arr){
    var odd=[],even=[];
      for(element of arr)
        (element % 2 ? odd : even).push(element)
    return [odd,even];
  }

//   function pickIt(arr){
//     var odd=[],even=[];
//     for (i of arr) {
//       if (i % 2 === 0) {
//         even.push(i);
//       } else {
//         odd.push(i);
//       }
//     }
//     return [odd,even];
//   }