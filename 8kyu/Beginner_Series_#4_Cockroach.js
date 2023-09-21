// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s) {
    let result = s * 100000
    return Math.floor(result / 3600)
  }

//   km converted cm is 1 = 100000
// 1 km = 100000 cm. cm = 100000 * Kilometer.
// per hour to per second, divide the time value by 3600
// math.floor rounds down to a whole number