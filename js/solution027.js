// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

//split without the space splits each character of the word. The .reverse changes all the characters backwards and .join brings them back together.
//The words are reversed but they are in the wrong position so split with a space in between splits each word at the spaces. The reverse
//is used to reverse the words and the .join is used with the space to convert it back to a string.