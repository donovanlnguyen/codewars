// Remove words from the sentence if they contain exactly one exclamation mark. 
// Words are separated by a single space, without leading/trailing spaces.

function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
  }