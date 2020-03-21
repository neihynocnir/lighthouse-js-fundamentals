/*
var udaciFamily = ["Julia", "James", "Neihy"];
console.log(udaciFamily);

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var crew = [ captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2;
prices[2] = 5;
prices[6] = 0;
console.log(prices);

var donuts = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);

var removeFirstElement = ["a", "b", "c"];
const firstElement = removeFirstElement.unshift();
console.log(removeFirstElement);

*/

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];


test.forEach(function(addNum) {
  let nTest = [];
  if ( addNum % 3 === 0) {
    value = addNum + 100;
    console.log(value);
    nTest.push(value);
  } 
});


