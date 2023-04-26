// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength)
{
 return Math.floor(today.getTime() - last.getTime()) / 86400000 > cycleLength
}

// var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// function periodIsLate(last, today, cycleLength)
// {
//   return Math.floor((today - last) / _MS_PER_DAY) > cycleLength;
// }