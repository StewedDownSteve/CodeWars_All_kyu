// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
    // Extract the non-numeric part from the string
    const nonNumericPart = str.replace(/[0-9]*$/, '');

    // Extract the numeric part from the end of the string
    const numPart = str.match(/(\d*)$/);
    // If there's a match, extract the numeric part
    const num = numPart ? numPart[1] : '';

    // If num is empty, set it to '0'
    const numericPart = num === '' ? '0' : num;

    // Increment the numeric part by converting it to a number
    const incrementedNum = (parseInt(numericPart, 10) + 1).toString();

    // Calculate the number of leading zeros needed
    const leadingZeros = numericPart.length - incrementedNum.length;

    // Pad the incremented number with leading zeros if necessary
    const paddedNum = leadingZeros > 0 ? '0'.repeat(leadingZeros) + incrementedNum : incrementedNum;

    // Construct the final string
    return nonNumericPart + paddedNum;
}

// Test cases
console.log(incrementString("foo"));     // foo1
console.log(incrementString("foobar23")); // foobar24
console.log(incrementString("foo0042")); // foo0043
console.log(incrementString("foo9"));     // foo10
console.log(incrementString("foo099"));   // foo100


