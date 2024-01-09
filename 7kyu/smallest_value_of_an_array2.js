function min(arr, toReturn) {
    return (toReturn == 'value') ? Math.min(...arr) : arr.indexOf( Math.min(...arr) );
  }

//   single line solution to smalles value of an array