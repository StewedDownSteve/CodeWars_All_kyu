// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// See test cases for more examples.

// Good luck!

function solve(arr) {
    return arr.map(x => [...new Set(x)].length).reduce((a,c) => a * c)
  };


//   Hint: You have an array full of arrays. Map through the parent array and make sure each sub array is a set aka no duplicate numbers. Once each sub array contains no duplicates you can just reduce multiplying the length of each sub array together to get the total combinations 





// const solve = arr I’m passing in an array, and that array has subarrays. So I’m going to use arr.map(). This is all about turning the array into Sets, then, the map should eventually give me an array that looks like that (3,4,6), then we're going to reduce that array.

// Going to use .map, because I want to go through the entire array grabbing each of the elements. Map is going to call in a function.

// Map is looping through each of these subarrays. If I’m looking at test #3, x is first the [1,2] array. Then x will be [3,4]. Then x will be [5,6].
// Since I know x is the subarray, this little bit of code here is giving me a new set:



//  [...new Set (x)]
// What I’ll end up with is an array that does not have duplicates.
// Let’s say we have [2, 3, 3, 3, 5, 7] - this becomes x. If I plug that array in for x, what would wind up happening is that this new set would return [2,3,5,7], and length would be 4. So now this map is creating a new array, the first value in that new array would be 4. Then again for the next subarray, would be 2.

// As we map through these sets, we just wind up with how many unique numbers were inside that subarray. So once I have this map all done to completion, and we’ve gone through figuring out how many items are in each of those subarrays, we .reduce() it.

// Reduce - lets say we’re reducing in Test #4. [3,4,6]
// What it’s going to do - the a, accumulator is the variable where you’re storing stuff. And c is current value. Many people write acc/current but it doesn’t matter what you call it.
// Reduce is going to take the current value and multiply it by the accumulator. We assume the accumulation is 1. 1x3 = 3, reduce will run again but this time the accumulation is already at 3… 3x4=12, now accumulator is 12… 12x5=60. So the whole line of code (in solution below) just reduces to 60.
// SOLUTION:

// const solve = arr => arr.map( x => [...new Set(x)].length ).reduce((a,c)=>a*c)