// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]



function chunkArray(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }
    return result


}

// for loop to iterate through the array while slicing off chunk of the specified size use slice().
// Increment the iretator by the specified size on each iteration in order to start each enw group from the previous one ended