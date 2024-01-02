// Given a string of text, write an algorithm that returns the text received in a reversed format. 
// E.g reverseString('algorithms') // should return 'smhtirogla'
//
function reverseString(text){
    let result = "";

    for(let char of text){
        result = char + result
    }

    return result;
}
