//Age Calculator: Problem 1
const birthYear = 1994
let futureYear = 2032
let ageMin = futureYear - birthYear - 1
let ageMax = futureYear - birthYear
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear)

//Snack Supply Calculator: Problem 2
const currentAge = 25
const maxAge = 72
let snacksPerDay = 2
let snacksPerYear = 365 * snacksPerDay
let snackNumber = (maxAge - currentAge) * snacksPerYear
console.log("You will need " + snackNumber + " snacks to last you until the age of " + maxAge)

//Circle Properties: Problem 3
let radius = 5
let pi = 3.141592
let diameter = 2 * radius
let circumference = pi * diameter
let area = pi * (radius * radius)
console.log("The circumference is " + circumference)
console.log("The area is " + area)

//Temperature Calculator: Problem 4
let celsius = 21
let fahrenheit = celsius * (9/5) + 32
console.log(celsius + " °C is " + fahrenheit + " °F")
fahrenheit = 101
celsius = (fahrenheit - 32) * (5/9)
console.log(fahrenheit + " °F is " + celsius + " °C")

//Grades Calculator: Problem 5
let alicesGrade = 97
let bobsGrade = 75
let camsGrade = 82
let deesGrade = 50
averageGrade = (alicesGrade + bobsGrade + camsGrade + deesGrade) / 4
console.log(deesGrade > averageGrade)

// Predict The Output: Problem 6
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) //num 3 = 10

let str = 'jel' 
str += 'lo'
console.log(str) //jello false

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) //My favourite numer is 42
//predicted incorrectly because I did not read what it was asking, I printed the sentence when it asked what type is the sentence which is a string