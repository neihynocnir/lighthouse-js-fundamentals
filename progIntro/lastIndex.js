
function lastIndexOf(arrayToTest, num){
 let lastPosition;
  for (let i = 0; i < arrayToTest.length; i++ ){
    if (arrayToTest[i] === num){
       lastPosition = i;
    } 
  }

  result = (lastPosition === undefined) ? -1 : lastPosition;
  
 return result;
}



console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);