let numberOfVowels = function(data) {
  const vowels =["a","e","i","o","u"];
  result = 0; 
  for (let letter of data){
    if (vowels.includes(letter)) {
      result++
   }
  }
  return result

};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));