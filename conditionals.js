let raining = true;
let  cold = false;
const temperature = 20;

if (temperature < 0) {
  cold = true;
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  cold = true
  console.log("Short sleeves won't cut it!");
} else if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");

if (raining) {
  console.log("Don't forget your umbrella!");
}
if (!raining) {
  console.log("Leave your umbrella at home!");
}
if (cold) {
  console.log("Make sure you pick out a scarf!");
}

