//Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let flattened = arrays.flat();
console.log(flattened);
// → [1, 2, 3, 4, 5, 6]

//Your own loop
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


//Everything
function every(array, test) {
    // Your code here.
    for (let element of array) {
        
        if (!test(element)) {
         
          return false;
        }
      }
      return true;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true


  //Dominant writing direction
  function dominantDirection(text) {
    // Your code here.
    let scripts = countBy(text, char => {
        
        let script = characterScript(char.codePointAt(0));
        
        return script ? script.name : null;
      });
      
      scripts = scripts.filter(({name}) => name != null);
      
      if (scripts.length == 0) return "ltr";
      
      let dominantScript = scripts.reduce((a, b) => a.count > b.count ? a : b);
      
      return dominantScript.name == "Arabic" ? "rtl" : "ltr";
    }
    
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl