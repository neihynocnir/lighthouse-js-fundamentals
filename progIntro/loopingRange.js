
function range(start, end, step){
  const finalArray = [];
  if ((start  === undefined) || (end === undefined) || (step === undefined)){
    return  finalArray
  } else if (start >= end ) {
    return  finalArray
  } else if ( step <= 0) {
    return  finalArray
  } else { 
    for (let i = start; i <= end; i = i + step) {
      finalArray.push(i);
    }
    return finalArray
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));
console.log(range( 5, 2, 3));
console.log(range( 0, 2, 1));

