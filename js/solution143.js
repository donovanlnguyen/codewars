// The goal is to create a function 'numberToPower(number, power)' that "raises" 
// the number up to power (ie multiplies number by itself power times).
function numberToPower(number, power){
    console.info(Math.log2(1024));
    let result = 1
    for(i = 1; i <= power; i++){
      result = result * number;
    }
    return result
  }