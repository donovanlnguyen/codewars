// You'll be given a string, and have to return the sum of all characters as an int. 
// The function should be able to handle all printable ASCII characters.
function uniTotal (string) {
    return string.split('').reduce((prev, curr) => prev + curr.charCodeAt(), 0)
  }