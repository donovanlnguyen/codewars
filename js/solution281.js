// Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.

// Examples
//       0  =>  should return 'Sunday 00:00'
//      -3  =>  should return 'Saturday 23:57'
//      45  =>  should return 'Sunday 00:45'
//     759  =>  should return 'Sunday 12:39'
//    1236  =>  should return 'Sunday 20:36'
//    1447  =>  should return 'Monday 00:07'
//    7832  =>  should return 'Friday 10:32'
//   18876  =>  should return 'Saturday 02:36'
//  259180  =>  should return 'Thursday 23:40' 
// -349000  =>  should return 'Tuesday 15:20'

const dayAndTime = minutes => {
    var date = new Date(0, 0, 0),
      daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date.setTime(date.getTime() + minutes * 60 * 1000);
    return `${daysOfWeek[date.getDay()]} ${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}`;
}

const formatNumber = number => (number < 10 ? "0" : "") + number;