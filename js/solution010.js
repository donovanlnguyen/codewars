//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. 
//The string can contain any char.
function XO(str) {
    let xCount = 0
    let oCount = 0
    for(i = 0; i < str.length; i++){
      let letter = str[i]
      if(letter === "x" || letter === "X"){
        xCount++;
      }else if(letter === "o" || letter ==="O"){
        oCount++;
      }
    }
  return xCount === oCount;
}

//function XO(str) {
//    let x = str.match(/x/gi);
//    let o = str.match(/o/gi);
//    return (x && x.length) === (o && o.length);
// }

//function XO(str) {
//    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
//}