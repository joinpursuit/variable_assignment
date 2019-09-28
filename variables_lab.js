// ## Problem One
var birthYear = 1991;
var futureYear = 2056;
console.log(birthYear - futureYear)

ageMax = futureYear - birthYear;
ageMin = futureYear - birthYear - 1;

console.log('I will be either ' + ageMin + ' or ' + ageMax);


// ## Problem Two
let currentAge = 28;
let maxAge = 36;
let appAmountSnacks = 2;
let snackS = appAmountSnacks * 7; 
let snackS2 = snackS * 4;
// console.log(snackS2)
let snackSS = snackS2 * 12;
// console.log(snackSS)
let snackYear = snackSS;
let snackNumber = snackYear * currentAge + 36;
// console.log(snackNumber)

console.log('You will need ' + snackNumber + ' to last you until the age of ' + maxAge);

//  Problem Three
let radius = 2 * 3.14159;
let circumferenceResult = radius * 14; 

console.log('The area is ' + circumferenceResult);

let circumferenceResult2 = Math.pow(circumferenceResult, 2)
let areaOfCircle = circumferenceResult2 / 4 * 3.14159
console.log("The area is " + areaOfCircle)

//Problem Four
let celciusTemp = 45;
let tempInFahrenheit = (celciusTemp * 9/5) + 32;

console.log(celciusTemp + "°C is " + tempInFahrenheit + " °F");

 let fahrenheitTemp = 200;
 let tempInCelcius = (fahrenheitTemp - 32) * 5/9;
 console.log(fahrenheitTemp + "°F is " + tempInCelcius + "°C.");

 //Problem 5
let aliceGrade = 89;
let bobGrade = 75;
let camGrade = 85;
let gradeAverage = (aliceGrade + bobGrade + camGrade) / 3;
console.log(gradeAverage)
deeGrade = 90
gradeAverageWithD = (gradeAverage) + deeGrade / 4;

//Problem 6
//a. 

    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)//10

// b. 
    
    let str = 'jel' 
    str += 'lo'
    console.log(str)// 'jello'
    
//c. 

    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))//string
    
    
