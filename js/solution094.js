// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
function abbrevName(name){
    const fullName = name.split(' ');
    const initials = fullName.shift().charAt(0) + "." + fullName.pop().charAt(0);
    return initials.toUpperCase();
  }