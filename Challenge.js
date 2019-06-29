
let birthYear = 1983;
let birthMonth = 2;

let futureYear = 2037;
let futureMonth = 1;

let futureAge;

if (futureMonth >= birthMonth) {
  futureAge = futureYear - birthYear;
} else {
  futureAge = futureYear - birthYear - 1;
}
console.log("You'll be ", futureAge, " in ", futureMonth, "/", futureYear);
