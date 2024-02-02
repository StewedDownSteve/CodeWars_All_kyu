// Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence. E.g

searchReplace("He is Sleeping on the couch", "Sleeping", "sitting") 
// should return "He is Sitting on the couch"



function searchReplace(str, word, newWord){
    if ( word[0] === word[0].toUpperCase()) {
        newWord = newWord[0].toUpperCase() + newWord.slice(1)
    }
    return str.replace(word, newWord)
}
// replacing word had to match captilazation, used an if statement to check the first letter of the word matches the uppercase. If it does we conver the first letter of newWord to uppercase and use slice to append the rest of the lwoercase letters
// Then we call replace(), stating 'word' is to be replace with 'newWord'