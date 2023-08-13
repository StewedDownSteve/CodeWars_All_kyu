// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {
    let arr = {};
    string.split('').map(v => arr[v] = arr[v] + 1 || 1)
    return arr;
}




// OR you could do any of the following



// function count (string) {
//     return string.split('').reduce(function(counts,char){
//       counts[char] = (counts[char]||0) + 1;
//       return counts;
//     },{});
//   }




