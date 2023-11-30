// You are given a string of words and numbers. Extract the expression including:

// the operator: either addition ("gains") or subtraction ("loses")
// the two numbers that we are operating on
// Return the result of the calculation.

// Notes:

// "loses" and "gains" are the only two words describing operators
// No fruit debts nor bitten apples = The numbers are integers and no negatives
// Examples
// "Panda has 48 apples and loses 4"  -->  44
// "Jerry has 34 apples and gains 6"  -->  40
// Should be a nice little kata for you :)


  function calculate(string) {
    const arr=string.replace(/[^0-9\s]/g,'').trim().replace(/\s+/g,' ').split(' ')
    if (string.match(/loses/g)){
    return arr[0]*1-arr[1]*1
    }
    return arr[0]*1+arr[1]*1
  }


  // make a new arr to hold on the numbers in the string
  // replace(/[^0-9\s]/g, '') replaces mutiple consective spaces with a single space
  // trim() removes spaces before and after
  // replace(/\s+/g, ' ') replaces mutiple spcaes with a single space
  // split(' ') splits the string into an array of words
  // then use if() to check if string includes 'loses' if it does we access the array that we made only have numbers. it should have two numbers, so index 0 and index 1, times those by 1 to make sure they are numbers and subtract
  // otherwise do the same thing with addition




  // TOP SOLUTION on CW
  function calculate1(string1) {
    return eval(string1.replace('loses','-').replace('gains','+').replace(/[a-zA-Z]/g,''));
  }