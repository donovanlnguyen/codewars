//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.

function findShort(s){
    let words = s.split(" ")
    let shortest = words[0].length
    let next
    
    for( let i = 1; i < words.length; i++){
      next = words[i].length
      if(shortest > words[i].length) shortest = next
    }
   return shortest
 }

//function findShort(s){
//    return Math.min(...s.split(" ").map (s => s.length));
//}