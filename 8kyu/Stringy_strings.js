// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

function stringy(size) {
    //   take in (size) and return a new string
let result = '1';
    // all new strings will start with 1 
    // make a loop to go through size
    // comparing i to being divisible by 2 to alternate between 1 and 0, returing the new array 
    for (let i = 0; i < size - 1; i++) {
        if (i % 2 === 0) {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
    
  }





