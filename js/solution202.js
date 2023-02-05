// For a given list of digits 0 to 9, return a list with the same 
// digits in the same order, but with all 0s paired. Pairing two 
// 0s generates one 0 at the location of the first one.

function pairZeros(arr) {
    var seenZero = 0;
    return arr.filter(function(num){
      return num != 0 || seenZero++ % 2 == 0;
    });
  }

//   var pairZeros = (a, f) => a.filter(n => n || (f = !f));