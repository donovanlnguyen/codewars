// Your task is to write a function that takes a String and 
// returns an Array/list with the length of each word added to each element.
const addLength = (str) => str.split(' ').map((e) => `${e} ${e.length}`);