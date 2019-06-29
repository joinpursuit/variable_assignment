let birthYear = 1986;
let birthMonth = 9;
let currentMonth = 6;
let currentYear = 2019;
let maxAge = currentYear - birthYear;
let minAge = maxAge - 1;
if (currentMonth >= birthMonth)
{
  console.log('You are ' + maxAge);
}else {
  console.log('You are ' + minAge);
}

console.log("I'll be " + maxAge + ' or ' + (minAge) + ' in ' + currentYear);
