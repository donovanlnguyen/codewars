// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let countSheep = 0
    arrayOfSheep.forEach(sheep =>{
      if(sheep) countSheep++
    })
    return countSheep
    }

    // function countSheeps(arrayOfSheep) {
    //     return arrayOfSheep.filter(Boolean).length
    // }