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
let x = 1
let y = 3
let bob = 12
let alice = (bob * y) + x
console.log("alice = " + alice)

//Problem 8
let numberOfCats = 20
let numberOfDogs = 60
let percentageOfCats = (numberOfCats / (numberOfCats + numberOfDogs)) * 100
let percentageOfDogs = (numberOfDogs / (numberOfCats + numberOfDogs)) * 100
console.log(percentageOfCats + "% of the daycare animals are cats.")
console.log(percentageOfDogs + "% of the daycare animals are dogs.")

//Problem 9
let year = 2020
let leapYear = (year % 4) || (year % 100 && year % 400)

if (leapYear){
    console.log("Leapyear!")
} else {
    console.log("Not a leapYear!")
}

//Problem 10a
//10

//Problem 10b
//'jello'

//Problem 10c
//string
