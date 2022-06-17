// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
function doubleChar(str) {
    var s1 = "";
    for(var i=0; i<str.length; i++){
      s1 += str[i]+str[i];
    }
    return s1;
  }
  