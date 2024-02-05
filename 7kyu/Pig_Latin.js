// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”




// An Imperative Approach
// Use a for...of loop in iterating through the string in order to determine where the first vowel in the word occurs.


function pigLatin(str) {
    str = str.toLowerCase()
    // Convert string to lowercase
    const vowels= ["a", "e", "i", "o", "u"];
    // An arrary of vowels
    let vowelIndex = 0;
    // Set vowel index to 0

    if (vowels.includes(str[0])) {
        // if first letter is a vowel
        return str +"way";
    } else {
        // If the first letter isn't a vowel
        for (let char of str) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        // Compose final string
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}