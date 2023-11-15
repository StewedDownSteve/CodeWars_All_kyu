// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Loop Method

function getCount1(str1) {
    let vowelsCount = 0;
    let vowels = ["a","e","i","o","u"];
    for(let i = 0;i < str1.length;i++){
      for(let j=0;j<vowels.length;j++){
        if(str1[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }