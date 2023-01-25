// An infinite number of shelves are arranged one above the other in a 
// staggered fashion.
// The cat can jump either one or three shelves at a time: from shelf 
// i to shelf i+1 or i+3
// Find the minimum number of jumps to go from start to finish

function solution(start, finish) {
    var diff = finish - start
    return Math.floor(diff / 3) + (diff % 3)
  }

//   function solution(start, finish) 
// {
//   let stepsToClimb = finish-start

//   let numBigJumps = Math.floor(stepsToClimb/3)

//   let numSmallJumps = stepsToClimb % 3

//   return numBigJumps + numSmallJumps
// }

// function solution(start, finish) 
// {
//   let jumps = 0;
//   let iFinish = 0;
//   for (let i = start; i < finish; i+=3) {
//     jumps ++
//     iFinish = i;
//   }
//   if ((iFinish+3) - finish === 1) {jumps++}
//   return jumps;
// }