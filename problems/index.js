//Problem 1
const birthYear = 1996
let futureYear = 2021
let ageMax = futureYear - birthYear
let ageMin = ageMax - 1
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear + ".")

//Problem 2
let currentAge = 24
const maxAge = 100
let snackPerDay = 2
let snackNumber = (snackPerDay * 365)*(maxAge - currentAge)
console.log("You will need " + snackNumber + " to last you until the age of " + maxAge + ".")

//Problem 3
let radius = 5
let circumferenceResult = 2 * Math.PI * radius
console.log("The circumference is " + circumferenceResult)
let areaOfCircle = Math.PI * radius**2
console.log("The area is " + areaOfCircle)

//Problem 4
let tempInCelsius = 40
let tempInFahrenheit = tempInCelsius * (9/5) + 32
console.log(tempInCelsius + "°C" + " is " + tempInFahrenheit + "°F")

//Problem 5
let aliceGrade = 95
let bobGrade = 80
let camGrade = 75
let avgGrade = (aliceGrade + bobGrade + camGrade) / 3
let deeGrade = 100
let newAvg = (aliceGrade + bobGrade + camGrade + deeGrade) / 4

if (deeGrade > newAvg) {
    console.log("Dee's grade is higher than the class average")
} else {
    console.log("Dee's grade is NOT higher than the class average")
}

//Problem 6
let a = 123
let lastIndexofA = (a.toString()).slice(-1)
console.log(Number(lastIndexofA))

//Problem 7
let x = 3
let y = 2
let bob = 12
let alice = (bob * y) + x
console.log("alice = " + alice)