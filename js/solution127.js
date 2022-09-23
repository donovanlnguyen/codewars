// Complete the function howManydays. It accepts 1 parameter month, which means the month 
// of the year. Different months have a different number of days as shown in the table below.
//  Return the number of days that are in month. There is no need for input validation: 
//  month will always be greater than 0 and less than or equal to 12.
function howManydays(month){
    switch (month){
      case 2: return 28
      case 4:
      case 6:
      case 9:
      case 11: return 30
    }
    return 31;
  }

//   function howManydays(month){
//     switch ( month ){
//       case 2 : return 28
//       case 4: case 6: case 9: case 11: return 30
//       default: return 31
//     }
//   }