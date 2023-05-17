// Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

function mostLikely(prob1,prob2){
    let p1 = prob1.split(':');
    let p2 = prob1.split(':');
    let sum1 = p1[0] / p1[1];
    let sum2 = p2[0] / p2[1];
    return sum2 > sum1
  }