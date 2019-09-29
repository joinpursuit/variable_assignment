// Problem One
let myBirthYear = 1995
let futureYear = 2025
let ageMin = futureYear - myBirthYear
let ageMax = ageMin - 1 
console.log('I will be either ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

// Problem Two
let myAge = 24
let maxAge = 35
let snackYear = 365 * (maxAge - myAge)
let snackNumber = 5 * snackYear
console.log(snackNumber)

// Problem Three
let radius = 3
let circumferenceResult = 2 * Math.PI * radius
let areaOfCircle = Math.PI * (radius * radius)
console.log(circumferenceResult);
console.log("The area of the circle is " + areaOfCircle);


// Problem Four
//let tempInCelsius = 12
//let tempInFahrenheit = (tempInCelsius * 1.8) + 32
//console.log(tempInCelsius + 'F is ' + tempInFahrenheit + 'C');
let tempInFahrenheit = 53
let tempInCelsius = (tempInFahrenheit - 32) / 1.8
console.log(tempInCelsius)

// Problem Five
let aliceGrade = 69
let bobsGrade = 86
let camGrade = 92
let averageGrade = (aliceGrade + bobsGrade + camGrade) / 3
let deeGrade = 97
averageGrade = (aliceGrade + bobsGrade + camGrade + deeGrade) / 4
if (deeGrade >  averageGrade) {
    console.log("Dee's test grade is higher than the class average");
} else {
    console.log("Dee's grade is not higher than the class average")
}

// Problem Six
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) // 10

let str = 'jel' 
str += 'lo'
console.log(str) //  jello

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) // My favorite number is 42


