const instructorWithLongestName = function(instructors) {
  result = []; 
  let nameLength = 0;
  for (let prof of instructors){
    if (nameLength < prof.name.length) {
      nameLength = prof.name.length;
      result = prof;
    } 
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));