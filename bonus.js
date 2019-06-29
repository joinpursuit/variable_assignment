const birthYear = 1993;
let currentYear = 2019;
let birthMonth = 12;
let currentMonth = 6;

if (currentMonth >= birthMonth){
  console.log("You are " + (currentYear - birthYear) + " years old.");
} else if (currentMonth < birthMonth){
  console.log("You are " + ((currentYear - 1) - birthYear) + " years old.");
}else {console.log("That's not a real month! Try again.");
}
