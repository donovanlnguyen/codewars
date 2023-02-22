// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.
function uniTotal (string) {
    return string.split('').reduce((prev, curr) => prev + curr.charCodeAt(), 0)
  }

//   function uniTotal(str) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       count += str.charCodeAt(i);
//     }
//     return count;
//   }