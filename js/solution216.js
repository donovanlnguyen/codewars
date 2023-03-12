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