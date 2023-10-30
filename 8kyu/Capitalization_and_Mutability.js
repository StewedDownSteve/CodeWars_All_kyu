// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

capitalizeWord = word => word[0].toUpperCase() + word.slice(1) ;
    

//   the gibe code only returns the first letter as an uppercase
// adding in slice from the 1 index of word, will add the rest of the word