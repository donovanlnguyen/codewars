// Given two integer arrays a, b, both of length >= 1, create a program that 
// returns true if the sum of the squares of each element in a is strictly 
// greater than the sum of the cubes of each element in b.
function arrayMadness(a, b) {
    return a.map(item => item ** 2).reduce((acc, current) => acc  + current) > b.map(item => item ** 3).reduce((acc,current) => acc + current);
}