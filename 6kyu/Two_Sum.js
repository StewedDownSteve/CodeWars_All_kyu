// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


function twoSum(numbers, target) {
    for(let i = 0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            let ressult = numbers[i] + numbers[j]
            if(ressult == target) return[i,j]
        }
    }
}

// First loop will iterate through all the elmements of the array

// Inside the loop, another loop will iterate through all the elements that are after the one that is being iterate in the last loop

// In each iteration, check if the sum of the element in the first loop(i) plus the one being iterated in the las lopp(j) is equal to the target, it'll return their positions 