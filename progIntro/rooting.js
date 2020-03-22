const judgeVegetable = function (vegetables, metric) {
  let result;
  let higherValue = 0;
  for (i = 0;  i < vegetables.length; i++){
    if (higherValue < vegetables[i][metric]) {
      higherValue = vegetables[i][metric];
      result = vegetables[i].submitter;
    }
  }
  return result;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))