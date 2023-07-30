// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  return str.split("").reverse().join("");
}

// split the string into an array, split()
// reverse the array. reverse()
// use join() to join all elements of arrary into string