//Problem 1
let birthYear = 1999;
let futureYear = 2099;
let ageMax =  futureYear - birthYear;
let ageMin =  ageMax + 1;
console.log('I will either be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

//Problem 2
let myAge = 19;
let maxAge = 75;
let snackPerDay = 3;
let ageDifference = maxAge - myAge;
let snackPerYear = 3 * 365;
let totalSnackConsumption = ageDifference * snackPerDay;
console.log("You will need " + totalSnackConsumption + " to last you until the age of " + maxAge);

//Problem 3
let circleRadius = 5;
let circleDiameter = circleRadius * 2;
let circleCircumference = Math.PI * circleDiameter;
console.log("The circumference is " + circleCircumference);
let circleArea = Math.PI * (circleRadius ^ 2);
console.log("The area is " + circleArea);


//Problem 4
let temperatureCelsius = 15;
let temperatureConverterFarenheit = (temperatureCelsius * (9 / 5)) + 32;
let temperatureFarenheit = temperatureConverterFarenheit;
console.log(temperatureCelsius + "C is " + temperatureFarenheit + "F.");

temperatureFarenheit = 65;
let temperatureConverterCelsius = (temperatureFarenheit - 32) * (5/9);
temperatureCelsius = temperatureConverterCelsius;
console.log(temperatureFarenheit + "F is " + temperatureCelsius + "C");

//Problem 5
let aliceGrade = 65;
let bobGrade = 87;
let camGrade = 72;
let averageGrade = ( aliceGrade + bobGrade + camGrade )/ 3;
let deeGrade = 100;
averageGrade = (aliceGrade + bobGrade + camGrade + deeGrade ) / 4;
console.log("Dee's grade is higher than the class average");

//Problem 6
//a
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) //10

//b
let str = 'jel' 
str += 'lo'
console.log(str) //Jello

//c
let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence)) //String