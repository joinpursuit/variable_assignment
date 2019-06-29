// JOSEPH P. PASAOA
/* 1. Age Calculator:
    * Store your birth year in a variable.
    * Store a future year in a variable.
    * Calculate your 2 possible ages for that year based on the stored values.
    * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
*/
console.log('BONUS. Age Calculator ** With Months ** :');
const bornYear = 1982;
const bornMonth = 8;
let futureYear = 2032;
let futureMonth = 4;
let futureMonthVerbose;
let agePrecise;

if (futureMonth === 1) {
  futureMonthVerbose = "January";
} else if (futureMonth === 2) {
  futureMonthVerbose = "February";
} else if (futureMonth === 3) {
  futureMonthVerbose = "March";
} else if (futureMonth === 4) {
  futureMonthVerbose = "April";
} else if (futureMonth === 5) {
  futureMonthVerbose = "May";
} else if (futureMonth === 6) {
  futureMonthVerbose = "June";
} else if (futureMonth === 7) {
  futureMonthVerbose = "July";
} else if (futureMonth === 8) {
  futureMonthVerbose = "August";
} else if (futureMonth === 9) {
  futureMonthVerbose = "September";
} else if (futureMonth === 10) {
  futureMonthVerbose = "October";
} else if (futureMonth === 11) {
  futureMonthVerbose = "November";
} else {
  futureMonthVerbose = "December";
}

let ageMax = futureYear - bornYear;
let ageMin = ageMax - 1;
if (bornMonth > futureMonth) {
  agePrecise = ageMin;
} else {
  agePrecise = ageMax;
}

console.log('I will be ' + agePrecise + ' years old in ' + futureMonthVerbose + ' ' + futureYear + '.');

console.log(' ');
