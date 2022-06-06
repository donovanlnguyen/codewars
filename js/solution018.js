//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase 
//in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase 
//letter becomes lowercase. As usual, your function/method should be pure, i.e. it should not mutate the original string.

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
  }

//  String.prototype.toAlternatingCase = function () {
//    new_str = "";
//    for(var i = 0; i < this.length; i++) {
//      if(this[i] === this[i].toUpperCase()) {
//        new_str += this[i].toLowerCase();
//      }
//      else {
//        new_str += this[i].toUpperCase();
//      }
//    }
//    return new_str;
//  }