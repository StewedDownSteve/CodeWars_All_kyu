// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    string = string.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");
    return alphabets.every(x => string.includes(x));
  }

//   case doesnt matter so toLowerCase()
// make a variable with a string 'a-z' then add split(""), so each letter can be compared.
// Use every() to compare to string, inside every use the includes. THis loops through alphabets and makes sure every element 'x' includes in the string. every() returns true or false