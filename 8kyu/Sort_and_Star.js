// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
const result = s.sort();
return result[0]
    .split("")
    .join("***");
}


// Sort the array (case-sensitive), default sort() func
// Take the first array element, result[0] first element
// Put *** between each char, split("") breaks it up join("***") puts it back with the stars