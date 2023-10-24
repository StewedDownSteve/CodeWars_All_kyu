// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let result = n.toString().split('').sort().reverse().join('');
    return Number(result);
  }

//   i'll try split() to break up the numbers, then sort() put them in order, then reverse() to reverse the sorted number
// on the first pass forgot join(). 
// split('') doesnt work on a number, need to use toString() at the begning 

// needed to turn the result back into a Number since i turned it into a string.