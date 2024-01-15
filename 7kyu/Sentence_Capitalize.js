// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g

capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!


// The **.forEach()** method in JavaScript runs a provided function on each element within an array.

function capSentence(text) {
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = []

    wordsArray.forEach(word => {
        capsArray.push(word[0].toUpperCase() + word.slice(1))
    });

    return capsArray.join(' ')
}