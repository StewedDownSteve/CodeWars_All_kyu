// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(arr) {
    for(let i = 0; i < arr.length; i++){
        const count = arr.filter(value => value === arr[i]).length;
        if(count % 2 == 1){
            return arr[i];
        }
    }
    return -1;
  }



//   first loop through arr
// inside the for loop, create a new variable 'count'
// inside count..
// use the filter() method to create a new array containing all the values that match the current iterated value
// use the length() method to help obtain the number duplicates for each number in arr
// use if statement to check if 'count' is an odd number
// if it is the loop is stopped by returning the number
// if the loop finishes, return -1, says there no number with an odd number of duplicates
