

let sumLargestNumbers = function(data) {
let lOne = 0;
let lTwo = 0;
for (i = 0;  i < data.length; i++){
  if ( data[i]> lOne ){
    lTwo = lOne
    lOne =  data[i];
  } else if (data[i] > lTwo && data[i] != lOne) 
    lTwo = data[i];
}
let result = lOne + lTwo
return result

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));