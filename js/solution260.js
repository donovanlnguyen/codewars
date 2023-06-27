// In this kata, you should guess an unknown number array.
// You'll be given a function f, which can answer your query in this way:

// f a b -- returns an Integral
// a and b are indexes of two different elements, and f will return the sum of these two elements.

// When a equals b or abs (a - b) is larger than 2, f will raise an error.

// Your goal is to find out the correct array.

// The whole procedure is like:

// Get the f and the length of the array
// Ask f questions
// Give the correct array according to the answers
// The array will always be 3 or longer than 3.