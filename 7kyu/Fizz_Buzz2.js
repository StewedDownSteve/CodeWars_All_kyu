// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
    let result = []
   for (let i = 1; i <= n; i++){
          if ((i % 3 == 0) && (i % 5 == 0)){
              result.push("FizzBuzz")
          }else if (i % 3 == 0){
              result.push("Fizz")
          }else if (i % 5 == 0){
              result.push("Buzz")
          } else {
        result.push(i)
      }
    }
    return result
  }

//   i learned FizzBuzz by using console logs. To make it work for codewars i made a blank array to push everything to and then call up the result
// var result will hold our array
// for loop starting at 1 will loop through all numbers up until the number equal to n
// if its divisble by 3 and 5 push "fizzbuzz" to arr 'result'
// div by 3 push fizz
// div by 5 push buzz
// else push i
// return full result