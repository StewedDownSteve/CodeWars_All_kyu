// Given an arrary of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and oyu may not use the same elment twice.
// You can return the answer in any order.

function findIndices(arr, target){
    // grab a num
    for(let i = 0; i < arr.length; i++){
        // comparing outside num to internal nums
        for(let k = 0; k < arr.length; k++){
            if(arr[i] + arr[k] === target){
               return [i,k] 
            }

        }
    }

}

console.log(findIndices([1,2,3,4,5], 9), '[3,4]')


// arr of nums, target num, return indices of nums that add up to target
// [1,2,3,4,5] - 9 => 3,4

// arr of nums - not empty, always nums, whole, positive, at 2