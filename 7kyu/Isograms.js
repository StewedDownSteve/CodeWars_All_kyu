// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
   }



   function isIsogram1(str1){
	return new Set(str1.toUpperCase()).size == str1.length;
}


function isIsogram2(str2){
    // var i, j;
    str2 = str2.toLowerCase();
    for(i = 0; i < str2.length; ++i)
      for(j = i + 1; j < str2.length; ++j)
        if(str2[i] === str2[j])
          return false;
    return true;
  }


