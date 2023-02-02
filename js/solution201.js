// Write a program that outputs the top n elements from a list.
function largest(n,xs){
    return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
  }

//   function largest(n, array) {
    
//     return array.sort((a,b)=>b-a).slice(0, n).reverse();
//   }

// let largest = (n, xs) =>
// 	xs
// 		.sort((a, b) => b - a)
// 		.filter((e, i) => i < n)
// 		.reverse();
