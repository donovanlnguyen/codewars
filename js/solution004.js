//Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    return array.map(num => {
        return num *-1
      });
 }

 //function invert(array) {
 //   return array.map(num => num * -1)
//}