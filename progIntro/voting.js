/*
We'll write a chooseStations(stations) function that takes in an array of possible voting stations, 
and then only returns the names of the stations that are appropriate 
*/
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

/* 
In order for a station to be deemed appropriate, 
it must have a capacity of at least 20, 
and be a school or community centre.
*/
const chooseStations = function chooseStations(stations){
  const okStation = []
  for (let station of stations){
    if (station[1] >= 20 && ((station[2] === 'school')|| (station[2] === 'community centre')) ){
      okStation.push(station[0]);
    }
  }
  return okStation;
}

console.log(chooseStations(stations));