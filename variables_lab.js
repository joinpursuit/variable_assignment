// Problem One 

let birthYear = 1994
let futureYear = 2020
let ageMin = 25
let ageMax = 26
console.log ("I will be either " + ageMin + " or " + ageMax + " in " + futureYear )

// Problem Two
let currentAge = 25
ageMax = 26
let snackNumber = 365
console.log ("You will need " + snackNumber + " snacks to last you until the age of " + ageMax)

// Problem Three
let radius = 6
function calculateCircumference(radius){
    return 2 * Math.PI * radius;
}
console.log (Math.PI)
console.log ("The circumference is " + calculateCircumference(radius))
function areaOfCircle(radius){
    return Math.PI * (radius * radius)
} 
console.log ("The area is " + areaOfCircle(radius))

// Problem Four 
let tempInCelsius1 = 32
let tempInFahrenheit1= (tempInCelsius1 * 1.8) + 32
console.log (tempInCelsius1 + "°C is " + tempInFahrenheit1 + "°F")
let tempInFahrenheit2 = 32
let tempInCelsius2 = tempInFahrenheit2 - 32
console.log (tempInFahrenheit2 + "°F is " + tempInCelsius2 + "°C.")

// Problem Five
let gradeForAlice = 96
let gradeForBob = 82
let gradeForCam = 86
console.log ("The average grade for all students is " + [gradeForAlice + gradeForBob + gradeForCam] / 3)
let gradeForDee = 75
console.log ("The average grade for all students is " + [gradeForAlice + gradeForBob + gradeForCam + gradeForDee] / 4)
let classAverage = ([gradeForAlice + gradeForBob + gradeForCam + gradeForDee] / 4)
if (gradeForDee > classAverage){
    console.log ("Dee's grade is higher than the class average.")
} else {
    console.log ("Dee's grade is lower than the class average.")
}

// Problem Six
//a
    
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3)
    console.log("Problem A will return a result of 10")
    

//b 
    
    let str = 'jel' 
    str += 'lo'
    console.log(str)
    console.log("Problem B will return a result of 'jello'")

//c 
    
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))
    console.log("Problem C will returan a result of 'My favorite number is 42'")