// A Storm at Sea
// Jill the adventurer has seen everything, from the highest mountains, to the most dangerous animals. But today she sailed through a hideous storm and shipwrecked. Left with only a damaged life boat and some supplies, she has carefully balanced out the weight not to capsize. But the weight is too much for the small life boat, she has to get rid of some items.

// Beginning from one side of the boat, she starts to remove the n smallest items and hopes for the best…

// Task
// Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

// Don't change the order of the elements that are left.

// Examples
// removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 2 [5,3,2,1,4] = [5,3,4]
// removeSmallest 3 [5,3,2,1,4] = [5,4]
// removeSmallest 3 [1,2,3,4,5] = [4,5]
// removeSmallest 5 [1,2,3,4,5] = []
// removeSmallest 9 [1,2,3,4,5] = []

// removeSmallest 2 [1,2,1,2,1] = [2,2,1]



function removeSmallest(n, arr) {
    // Check if n is less than or equal to 0, in which case return the original array
    if (n <= 0) {
      return arr;
    }
  
    // Check if n is greater than or equal to the length of the array
    // In this case, return an empty array
    if (n >= arr.length) {
      return [];
    }
  
    // Create a copy of the array to avoid modifying the original array
    let result = arr.slice();
  
    // Iterate through the array and remove the smallest n elements while maintaining order
    for (let i = 0; i < n; i++) {
      let minIndex = result.indexOf(Math.min(...result));
      result.splice(minIndex, 1);
    }
  
    return result;
  }

//   function removeSmallest(n, arr) {
//     let res = arr.slice(0);
//     while( n-- > 0 ) res.splice(res.indexOf( Math.min(...res) ),1);
//     return res
//   }