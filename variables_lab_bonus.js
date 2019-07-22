// JOSEPH P. PASAOA
//


/*BONUS. Take the Age Calculator from #1 and make it month-specific.
*/
console.log('BONUS // Age Calculator (month-specific)');
const bornYear = 1982;
const bornMonth = 8;
let futureYear = 2032;
let futureMonth = 9;

let futureMonthVerbose;
let agePrecise;
switch (futureMonth) {
  case 1:
    futureMonthVerbose = "January";
    break;
  case 2:
    futureMonthVerbose = "February";
    break;
  case 3:
    futureMonthVerbose = "March";
    break;
  case 4:
    futureMonthVerbose = "April";
    break;
  case 5:
    futureMonthVerbose = "May";
    break;
  case 6:
    futureMonthVerbose = "June";
    break;
  case 7:
    futureMonthVerbose = "July";
    break;
  case 8:
    futureMonthVerbose = "August";
    break;
  case 9:
    futureMonthVerbose = "September";
    break;
  case 10:
    futureMonthVerbose = "October";
    break;
  case 11:
    futureMonthVerbose = "November";
    break;
  case 12:
    futureMonthVerbose = "December";
}
let ageMax = futureYear - bornYear;
let ageMin = ageMax - 1;
bornMonth > futureMonth
  ? agePrecise = ageMin
  : agePrecise = ageMax;
console.log('I will be ' + agePrecise + ' years old in ' + futureMonthVerbose + ' ' + futureYear + '.');
//
