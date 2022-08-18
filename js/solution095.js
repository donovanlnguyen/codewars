// Write a function that returns a string in which firstname is swapped with last name.
function nameShuffler(str){
    const name = str.split(' ').reverse().join(' ')
    return name
  }