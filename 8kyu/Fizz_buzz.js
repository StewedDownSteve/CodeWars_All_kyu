// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

function fizzBUzz(num){
    for (i = 1; i <= num; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
            console.log("FizzBuzz")
        }else if (i % 3 == 0){
            console.log("Fizz")
        }else if (i % 5 == 0){
            console.log("Buzz")
        } else {
       console.log(i)
    }
}
}

// for loop starting at one, i less than or equal to num, i++
// if i is divisible by 3 w/ no remainder and 5 w/ no remainder then log FizzBuzz
// i divisible by 3 then fizz
// i divisible by 5 then buzz
// else return i