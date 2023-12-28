// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function breakCamelCase(str) {
    let result = '';

    for(let i = 0; i < str.length; i++) {
        if(i > 0 && str[i] === str[i].toUpperCase()) {
            result += ' ' + str[i];
        }else{
            result += str[i]
        }
    }
    return result;
}

// crate a new var to hold the result
// iterate through eac character in string
// check if current character is upper or lowercase
// insert a space before the uppercase
// otherwise return the string as is