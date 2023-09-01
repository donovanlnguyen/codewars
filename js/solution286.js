// Define a function that will receive a logarithm function, and returns the base of that logarithm.

// guessBase(ln) == e
// Base is a real number (not only integers) guaranteed to be less than 1e6.

// Have a fun time coding!

determineBase=f=>2**f(2)**-1

function determineBase(logFunc) {
    return Math.exp(Math.log(100) / logFunc(100));
}