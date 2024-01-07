// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g

capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!

function capSentence(text) {
    let wordsArrary = text.toLowerCase().split(' ')

    let capsArray = wordsArrary.map(word => {
        return word.replace(word[0], word[0].toUppercase())
    })
    return capsArray.join(' ')
}




// Use map() to create a new array where each word is captialized, replace the first letter of each word(word[0]) with an uppercase version of this same letter. Then we add the capitalized word using the .push() method to the capsArray.