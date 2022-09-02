// Implement a function which accepts 2 arguments: string and separator.
// The expected algorithm: split the string into words by spaces, split each word into separate characters and join 
// them back with the specified separator, join all the resulting "words" back into a sentence with spaces.
function splitAndMerge(string, separator) {
    let words = string;
   return words.split(" ").map(index => index.split("").join(separator)).join(" ");
  }