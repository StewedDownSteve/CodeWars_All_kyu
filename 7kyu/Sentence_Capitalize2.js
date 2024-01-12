// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g

capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!

// The .map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called.

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map(word => {
        return word[0].toUpperCase() + word.slice(1)
    })
    return capsArray.join(' ')
}

// use map function to loop through every word in the array and exectute a function that takes the first letter of every word at index 0, upper case, then adds it to the words from index 1
// return it and join them all with a space ' '