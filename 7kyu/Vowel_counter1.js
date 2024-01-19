const Vowels = ["a", "e", "i", "o", "u"]



function vowelsCounter(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each char is a vowel
    for (let letter of text.toLowerCase()) {
        if (Vowels.includes(letter)) {
            counter++
        }
    }
    // Return number of vowels
    return counter
}