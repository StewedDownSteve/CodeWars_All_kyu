// Given a string of text, find and return the most recurring character. e.g

maxRecurringChar('aabacada') // will return 'a'

function maxRecurringChar(text) {
    let charMap = {};
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}





    // charMap is a blank obj that will hold all the char and the amount of times they appear
    // for...of loop goes through 'text' and check each character.
    // if statement, hasOwnProperty() sees if the char has shown up in the onj charMap already, if it has then it adds another to the char
    // if it hasn't it add that char and sets it to one.


    // For looping through the charMap object, we initialize two variables at the beginning.

// maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for…in loop.

// maxChar is used to store the character with the highest value on every iteration.
