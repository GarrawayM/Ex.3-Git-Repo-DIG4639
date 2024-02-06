//3-1 Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let flattened = arrays.flat();
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]

//3-2 Your own loop
// Your code here
function loop(value, test, update, body) {
    
    while (test(value)) {
      
      body(value);
      
      value = update(value);
    }
  }
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1


//3-3 EveryLoop
//3-4 EverySome

function everyLoop(array, test) {
   
    for (let element of array) {
      
      if (!test(element)) {
        
        return false;
      }
    }
    return true;
  }
  
  function everySome(array, test) {
    
    return !array.some(element => !test(element));
  }
  
 
  console.log(everyLoop([1, 3, 5], n => n < 10));
  // → true
  console.log(everyLoop([2, 4, 16], n => n < 10));
  // → false
  console.log(everyLoop([], n => n < 10));
  // → true
  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true