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

// Lesson 4
function wordSearch(query, seq){

  let res = [];
  let searchStr = query.toLowerCase();
  for(let i = 0; i < seq.length; i++) {
    let soueceStr = seq[i].toLowerCase();
    if(soueceStr.indexOf(searchStr) >= 0) {
      res.push(seq[i]);
    }
  }

  if(res.length == 0) {
    res.push('Empty');
  }

  return res;

}

// Lesson 5
function getDivisorsCnt(n){

  let res = 0;

  for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
      res++;
    }
  }

  return res;

}

// Lesson 6
function getCount(str) {
  let vowels = 'AEIOUaeiou';
  let rez = 0;
  for(let i = 0; i < str.length; i++) {
    if(vowels.indexOf(str[i]) > -1) {
      rez ++;
    }
  }
  return rez;
}

// Lesson 7
function moveTen(s){
  const alf = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  let res = '';
  for(let i = 0; i < s.length; i++) {
    res += alf[alf.indexOf(s[i]) + 10];
  }
  return res;
}

// Lesson 8
function peakAndValley(arr){
  let res = [];

  for(let i = 3; i < (arr.length - 2); i++) {
    if ((arr[i] > arr[i-1] && arr[i] > arr[i-2] && arr[i] > arr[i-3] && arr[i] > arr[i+1] && arr[i] > arr[i+2] && arr[i] > arr[i+3])
          || (arr[i] < arr[i-1] && arr[i] < arr[i-2] && arr[i] < arr[i-3] && arr[i] < arr[i+1] && arr[i] < arr[i+2] && arr[i] < arr[i+3])){
      res.push(arr[i]);
    }
  }

  return res;
}

// Lesson 9
function tableGame(table) {
  let result = [-1];

  let A = table[0][0];
  let B = table[0][2];
  let C = table[2][0];
  let D = table[2][2];

  if (table[0][1] == A+B && table[1][0] == A+C && table[2][1] == C+D && table[1][2] == B+D && table[1][1] == A+B+C+D) {
    result = [A,B,C,D];
  }

  return result;
}

// Lesson 10
function wordsToMarks(string){
  let alf = 'abcdefghijklmnopqrstuvwxyz';
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    res += alf.indexOf(string[i]) + 1;
  }
  return res;
}
