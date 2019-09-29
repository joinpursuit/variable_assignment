const birthYear = 1996;
let futureYear = 2023;

let ageMin = futureYear - birthYear - 1;
let ageMax = futureYear - birthYear;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear + ".");

//Problem 2

let currentAge = 23
let maxAge = 100
let estSnackAmount = 2

let snackNumber = (maxAge - currentAge) * 2

console.log("You will need " + snackNumber + " snacks to last you until the age of " + maxAge + ".")

//Problem 3

let radius = 4;
let circumferenceResult = 2 * radius * 3.14;
let areaOfCircle = radius * radius * 3.14;

console.log("The circumference is " + circumferenceResult + ".");
console.log("The area is " + areaOfCircle + ".")


//Problem 4

let tempInCelcius = 55
let tempInFahrenheit = tempInCelcius * 1.8 + 32

console.log(tempInCelcius + " °C is " + tempInFahrenheit + " °F.")

tempInFahrenheit = 55 
tempInCelcius = (tempInFahrenheit - 32) / 1.8

console.log(tempInFahrenheit + " °F is " + tempInCelcius + " °C.")

//Problem 5

let aliceGrade = 90 
let bobGrade = 90
let camGrade = 90
let averageGrade = (aliceGrade + bobGrade + camGrade) / 3

let deeGrade = 88
averageGrade = (aliceGrade + bobGrade + camGrade + deeGrade) / 4

if (deeGrade > averageGrade){
    console.log("Dee's grade of " + deeGrade + " is higher than the class average of " + averageGrade + ".")
} else {
    console.log("Dee's grade of " + deeGrade + " is not higher than the class average of " + averageGrade + ".")
}

//Problem 6

 
//     js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) //10
    

// b. 
//     js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) //jello
    

// c. 
//     js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) //string


