// Write a function that takes a string of parentheses, and determines if the order of the parentheses 
// is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(s) {
    const hashMap = {"(": ")", "{": "}", "[": "]"}
    const stack = []
    for(let ch of s){
      if(hashMap[ch]){
        stack.push(hashMap[ch])
      }else if(stack.length > 0 && stack[stack.length -1] === ch) {
        stack.pop()
      }else{
        return false
      }
    }
    return stack.length === 0 
  }