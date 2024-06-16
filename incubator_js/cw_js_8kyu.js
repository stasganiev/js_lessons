'use stricts'

function differenceInAges(ages){
  let min = 0;
  let max = 0;
  if (ages.length > 0) {
    min = ages[0];
    max = ages[0];
  }
  for (let el of ages) {
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }

  }
  return [min, max, max - min];
}
