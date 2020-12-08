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
