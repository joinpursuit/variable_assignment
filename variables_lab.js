let birthYear = 1996;
let futureYear = 2019;
console.log(futureYear - birthYear);

let ageMax = futureYear - birthYear
let ageMin = ageMax -1
console.log("I will be either " + ageMax + " or " + ageMin + " in " + futureYear);

let currentAge = 22;
let maxAge = 25;
let snackAmount = 3;
let ageDifference = maxAge - currentAge
let snacksPerYear = 365 * snackAmount
let totalSnackConsumption = snacksPerYear * ageDifference
console.log("You will need " + totalSnackConsumption  + " to last you until the age of " + maxAge);

let radiusResult = 2;
let circumferenceResult = (radiusResult * 2) * Math.PI
console.log("The circumference is " + circumferenceResult); 
let areaOfCircle = Math.PI * (radiusResult * radiusResult);
console.log("The area is " + areaOfCircle);

let tempInCelsius = 3;
let tempInFahrenheit = (tempInCelsius * 9)/5+32
console.log(tempInCelsius + "°C is " + tempInFahrenheit + "°F")
let fahrenheitTemp = 2;
let celsiusTemp = (fahrenheitTemp - 32)*5/9;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C")


let aliceGrade = 5
let bobGrade = 4
let camGrade = 3
let averageGrades = (aliceGrade + bobGrade + camGrade) / 3
console.log("The average grade of all students is " + averageGrades)
let deeGrade = 2
let averageGradesOfAllStudents = (aliceGrade + bobGrade + camGrade + deeGrade) / 4
console.log(deeGrade <= averageGrades)

//console.log(num3) //10
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)

//console.log(str) //jello
    let str = 'jel' 
    str += 'lo'
    console.log(str)

//console.log(typeof(sentence)) //string
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))