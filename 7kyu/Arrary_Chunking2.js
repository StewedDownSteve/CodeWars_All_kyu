// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
// should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]

function chunkArray(array,size) {
    let result = []
    let arrayCopy = [...array]
    while (arrayCopy.length > 0) {
        result.push(arrayCopy.splice(0, size))
    }
    return result
}

// splice() manipulates the arrary directly, so we will use a spread operator ... to create a copy of the arrary called, arraryCopy
// use a while loop, it will extract element of the copy array, it will keep going as long as arraryCopy is greater than 0
// each sub-arrray created is push() to result
// at the end call the result