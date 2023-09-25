// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength. Otherwise, return false.

function periodIsLate(last, today, cycleLength) {
    return (today-last)/86400000>cycleLength
  }

//   subtracting today from last date, which will be in date form and cycle length with be in number of days
// hard part is converting those dates to an atual number that can be compared to cycleLength
// 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds = 86400000
// so today - last divided by the num
// will return true or false