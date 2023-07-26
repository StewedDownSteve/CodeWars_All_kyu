// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

//  instead of using a loop i'll .replace() to find ! and replace it with nothing