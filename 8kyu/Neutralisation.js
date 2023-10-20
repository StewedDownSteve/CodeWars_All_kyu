// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Examples
// ("--++--", "++--++") ➞ "000000"

// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"

// ("-++-", "-+-+") ➞ "-+00"
// Notes
// The two strings will be the same length.

function neutralise(s1, s2) {
    let result = "";
    for (let i = 0; i < s1.length; i++) {
      const char1 = s1[i];
      const char2 = s2[i];
      if (char1 === "+" && char2 === "+") {
        result += "+";
      } else if (char1 === "-" && char2 === "-") {
        result += "-";
      } else {
        result += "0";
      }
    }
    return result;
  }

  // make an empty var to hold the result of the new string
  // make a for loop to go through the cahracters of both strings
  // create a var for each string, that holds i from the loop
  // compare each character to the character in the other string, using the stated rules
  // positives and positives remain positive, += to result, new var
  // neg and nega remain neg, += to result
  // else, neg and pos, the only other option, result += 0
  // return result


  // shorter version below
  function neutralise1(str1, str2) {
    let res = "";
    for(let i = 0; i < s1.length; i++) {
      res += str1[i] !== str2[i]? "0": str1[i];
    }
    return res;
  }
