// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.



// function getCount(str) {
//     str.reduce((total,x) => total+(x === a || x === e || x === i || x === o || x === u), 0);
//   }

function getCount(str) {
    let newStr = str.match(/[aeiou]/gi);
    return newStr === null ? 0 : newStr.length;
}


