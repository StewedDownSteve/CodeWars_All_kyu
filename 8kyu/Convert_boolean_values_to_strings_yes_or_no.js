// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if ( bool === true){
        return "Yes"
    } else {
        return "No"
    }
}
// one line version
boolToWord = (bool) => bool ? "Yes" : "No"

//   take in a boolean and compare if its true or false
// if true then return "yes" and if false return "no"