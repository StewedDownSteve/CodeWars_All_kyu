// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
    return this.toString() === this.toUpperCase()

  }


//   for a method we will use 'this' to refrence the varr to be inserted
// toString turns everything into a string
// compare === it to this.toUpperCase(), this turns the whole input uppercase. It all has to be upper case to pass the test
// i phrased it as an implied true/false return