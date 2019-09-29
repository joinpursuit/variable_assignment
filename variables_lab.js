let myBirthYear = 1991;
let futureYear = 2022;
let ageMax = 2022 - 1991;
let ageMin = ageMax - 1;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);

let myAge = 28;
let maxAge = 35;
let snackAmt = 2;
let totalSnacks = (((35 - 28) * 365) * 2);
console.log("You will need " + totalSnacks + " to last you until the age of " + maxAge);

let radiusNum = 5
let circumferenceResult = 2 * (Math.PI * radiusNum);
console.log("The circumference is " + circumferenceResult);
let areaOfCircle = Math.PI * (radiusNum * radiusNum);
console.log("The area is " + areaOfCircle);

let celsiusTemp = 20;
let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
console.log(celsiusTemp + "°C is " + fahrenheitTemp + "°F");
fahrenheitTemp = 68;
let celsiusConverter = (5/9) * (fahrenheitTemp - 32);
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C");

let aliceGrade = 78;
let bobGrade = 75;
let camGrade = 68;
let avgGrade = (aliceGrade + bobGrade + camGrade) / 3;
let deeGrade = 64;
let avgGradeAllStudents = (aliceGrade + bobGrade + camGrade + deeGrade) / 4;
console.log("Is Dee's grade greater than the class average? " + (deeGrade > avgGrade)); 

console.log(10) //10;
console.log('jello') //'jello';
console.log('string') //'string';