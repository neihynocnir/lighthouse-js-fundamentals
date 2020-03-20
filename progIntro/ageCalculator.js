function ageCalculator(name, yearOfBirth, currentYear){
  let age = (currentYear - yearOfBirth);
  return ( name + " is " + age + " years old.");
}


// pass in catSays as a callback function
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));