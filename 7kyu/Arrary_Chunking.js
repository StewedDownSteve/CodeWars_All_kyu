// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

function chunkArray(array, size) {
    let result = []
    for (value of array){
        let lastArray = result[result.length - 1]
        if(!lastArray || lastArray.length == size){
            result.push([value])
        } else {
            lastArray.push(value)
        }
    }
    return result

}

// an eptyarrary result, used to store every smaller group(chunk)
// in the for...of loop, use an if statement to check if our result array is empty or if the last group created is compelte
// if it is we create a new sub group with current value and push it to the result arrary