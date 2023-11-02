// 8 kyu
// Merging sorted integer arrays (without duplicates)
// 784091% of 9201,035 of 6,878acadet1 Issue Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    return Array.from(new Set(a.concat(b).sort((x,y) => x-y)))

  }

//   TOP ANSWER___________

// return [...new Set(a.concat(b))].sort((a,b)=>a-b);

//   take in two arrarys,
// combine them into a single arrary, concat()
// sort the arrary, sort()
// git rid of duplicates, using new Set instead of filter()
// had to wrap everything in arrar.from, turns everything into a new array