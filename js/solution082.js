// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
    let first = x.replace(/[0-4]/g,'0')
    let second = first.replace(/[5-9]/g,'1')
    return second
  }

//   function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }