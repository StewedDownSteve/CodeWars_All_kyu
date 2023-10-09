// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
function isAnagram (test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
  }



// comepare test, orginal === after we run them through the same process
// beacuse of the note saying it isn't case sensitie we have to first start out with .toLowerCase()
// split() to break both up
// sort() to sort the letters.*it'll sort the letters the same for each var
// join them back together.