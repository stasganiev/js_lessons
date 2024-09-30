'use stricts'

// Lesson 1
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

// Lesson 2
function disemvowel(str) {
  let vowels = 'AEIOUaeiou';
  let rez = '';
  for(let i = 0; i < str.length; i++) {
    if(vowels.indexOf(str[i]) == -1) {
      rez += str[i];
    }
  }
  return rez;
}

// Lesson 3
function roots(a,b,c){
  let subSqrt = Math.sqrt(b*b - 4*a*c);
  let x1 = (-b + subSqrt) / (2*a);
  let x2 = (-b - subSqrt) / (2*a);

  if (isNaN(x1) || isNaN(x2)) {
    return null;
  }

  return +(x1 + x2).toFixed(2);
}
