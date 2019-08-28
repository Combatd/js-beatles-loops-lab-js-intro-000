// add solution here
// create a function theBeatlesPlay
function theBeatlesPlay (musicians, instruments) { // two array parameters
  let beatles_arr = []; // initialize an empty array
  
  for (let i = 0; i < musicians.length; i++) { // iterate through musicians
    beatles_arr[i] = `${musicians[i]} plays ${instruments[i]}`;
  } // a string with the name of each beatle and their instruments
  
  return beatles_arr; // return the array
}

// create a function johnLennonFacts
function johnLennonFacts(facts) { // accepts an array of facts
  let i = 0;
  while(i < facts.length) {
    facts[i] += "!!!" // add "!!!" to each element
    i++ // iterate by 1
  }
  return facts; // return the mutated array
}

// create a function iLoveTheBeatles
function iLoveTheBeatles(number) { // takes a number as a parameter
  let limit = number - 15; // the array length AFTER do while loop executes
  let love_arr = []; // one element array
    do {
      love_arr.push("I love the Beatles!"); // array with strings in one element
      number++ // increment the passed in number
    } while (number < 15) // run it number amounts of times
    
    return love_arr; // return the array
}