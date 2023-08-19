// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
    const newArr = String(n).split('').map(Number);
    return newArr.reverse();
  }

//   best practice from Codwars below:

function digitize1(n1) {
    return String(n1).split('').map(Number).reverse()
  }