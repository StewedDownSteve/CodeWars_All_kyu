// Translate the provided string to Pig Latin by following the rules below:

// For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. E.g
// "pig" = "igpay"
// For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. E.g
// "glove" = "oveglay"
// For words that begin with vowel sounds, simply add "way" to the end of the word. E.g
// "explain" = "explainway”


// A Declarative Approach


function pigLatin(str) {
    return str
    .replace(/^([aeiouy])(._)/, '$1$2way')
    .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}


// first statment specifies a replacement atke place if the word begins with a vowel
// the second bracket refers to the characters after the vowel
// a new string format is generated and replaces the orginal, $1 refers to first brack and $2 refers tos econd and adds way to the end

// Second statement specifies that if the word doesn not start witha vowels, it should be replaced with a new string format and added ay