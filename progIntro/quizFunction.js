/*
function laugh(num) {
  let message = "ha" ;
  const msg = []; 
  for (let i = 1; i <= num; i++){
    msg.push(message);
  }
  let finalMsg = msg.join('') + "!";
  return (finalMsg);
}

console.log(laugh(3));

var x = 1;

function addTwo() {
   x  = x + 2;
}

addTwo();
x = x + 1;
console.log(x);


function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia");

*/

/*
 * Programming Quiz: Build A Triangle (5-3)
 

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* " ;
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(num){
  const final = []; 
  for (var i = 1; i <= num; i++){
    final.push(makeLine(i));
  }
  let final2 = final.join('')
  return final2;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

*/

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));