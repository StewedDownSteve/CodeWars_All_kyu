// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    return word.toLowerCase()
    .split('')
    .map( (c,i,a) => a.indexOf(c) === a.lastIndexOf(c) ? '(' : ')' )
    .join('')
}

// deal with toLowerCase so we don't ahve to worry about casing
// will need to split the string into individual characters,split()
// use map() to check to see if the character is a duplicate, return a new character to a new array 
// map indexOf === lastIndexOf ? '(' : ')' -> join -> str