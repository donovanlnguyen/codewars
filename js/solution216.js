// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
var longestCommonPrefix = function(strs) {
    let prefix = strs.reduce((acc, str) => str.length < acc.length ? str : acc);
  
  for (let str of strs) {
      while (str.slice(0, prefix.length) != prefix) {
          prefix = prefix.slice(0, -1);
      }
  }
  return prefix;
};

// var longestCommonPrefix = function(arr) {
//     let i = 1;
//     let prf = arr[0];
//     while(i < arr.length){
//         if(!arr[i].startsWith(prf)){
//             prf = prf.slice(0, -1)
//         }else{
//             i++
//         }
//     }
//     return prf
// };