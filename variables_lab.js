//problem 1

let birthYear = 1992
let futureYear = 2019
let ageMax = futureYear - birthYear
let ageMin = futureYear - birthYear -1
console.log("I will either be " + ageMin + " or " + ageMax + " in the year 2019")



//problem 2

let currentAge = 27
let maximumAge = 50
let snackNumber = 12
let snackMax = snackNumber * 365
let grandTotal = snackMax * (maximumAge - currentAge)
console.log("I will need " + grandTotal + " snacks to last me until the age of " + maximumAge)


//problem 3

let radius = 2
let diameter = 2 * radius
let circumference = radius * Math.PI
console.log(Math.PI)
let area = Math.PI * (radius * radius)
console.log("The circumference is " + circumference)
console.log( "The Area is " + area)



//problem 4

let celsiusTemp = 5
let fahrenheit = celsiusTemp * (9/5) + 32
console.log(fahrenheit)
console.log(celsiusTemp+ "°C" + " is " + fahrenheit + "°F")

let newCelsiusTemp = (fahrenheit - 32) * (5/9)
console.log(newCelsiusTemp)

console.log(fahrenheit+ "°F" + " is " + newCelsiusTemp + "°C")

//problem 5

let aliceGrade = 5
let bobGrade = 6
let camGrade = 7
let firstAverage = (aliceGrade + bobGrade + camGrade) / 3
console.log(firstAverage)
let deeGrade = 8
let secondAverage = (aliceGrade + bobGrade + camGrade + deeGrade) / 4
console.log(secondAverage)

if (deeGrade > secondAverage) {
    console.log("Dee's grade is higher than the class average")
  }

//problem 6 a
console.log("6a predition is 10, 2 * 5 = 10")
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)


//problem 6 b
console.log("6b prediction is jello, jel + lo ")

let str = 'jel' 
str += 'lo'
console.log(str)


//problem 6 c
console.log("6c preditction is string, the typeof will just identify the string ")

let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))

console.log("all of my predictions were correct")
