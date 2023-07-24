// Some people just have a first name; some people have first and last names and some people have first, middle and last names.

// You task is to initialize the middle names (if there is any).

// Examples
// 'Jack Ryan'                   => 'Jack Ryan'
// 'Lois Mary Lane'              => 'Lois M. Lane'
// 'Dimitri'                     => 'Dimitri'
// 'Alice Betty Catherine Davis' => 'Alice B. C. Davis'

function initializeNames(name){
    let arr = name.split(' ');
   for (let i = 1; i < arr.length - 1; i++) 
       arr[i] = arr[i].charAt(0) + '.';
   return arr.join(' ');
  }

//   create a new var that splits up the name
// create a for loop starting at [1], starts at either that last name if no middle name or the middle name. arr.length - 1 so that it leaves out the last name, then filters through middle name(s)
// arr[i] will start at the middle name, charAt(0) will start at the first letter
// join it all together join(' ')