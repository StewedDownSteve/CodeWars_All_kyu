// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))
  

//   Using map(), it returns a new arrary
// in the map() function, var x, is qual to...
// does sqrt of x have a remainder? if so its not a SR, so take x * x to square the number
// otherwise return the numbers squared root