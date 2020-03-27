const urlEncode = function(text) {
  for (let t of text){
    text = text.trimLeft().trimRight().replace(' ', '%20');
  }
  return  text
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));