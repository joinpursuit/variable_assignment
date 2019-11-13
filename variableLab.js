// #
// Variable Exercises


// ## Problem One

// Age Calculator:
//     *
//     Store your birth year in a variable.
let birthYear = 1993;
//*Store a future year in a variable.
let futureYear = 2019;
//*Calculate your 2 possible ages
// for that year based on the stored values.*For example,
//     if you were born in 1988, then in 2026 you 'll be either 37 or 38, depending on what month it is in 2026. *
//     Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
let currentAge = futureYear - birthYear;
let ageMax = currentAge;
let ageMin = currentAge - 1;
console.log(`I will be either ${ageMin} and ${ageMax} depending on the month of 2019.`)

// ## Problem Two

// Snack Supply Calculator:
//*Store your current age in a variable.
//*Store a maximum age in a variable.
//*Store an estimated snack amount per day(as a number).
//*Calculate how many snacks you would eat total,from your current age 
//until the maximum age.*Log the result to the screen like this: "You will need 
//`snackNumber` to last you until the age of `maxAge`".

let currentAge2 = 26;
let maxAge2 = 80;
let snackPerDay = 5;
let totalYears = maxAge2 - currentAge2 //54
let snackNum = (snackPerDay * 365) * totalYears

console.log(`You will need ${snackNum} to last you until the age of ${maxAge2}.`)

// ## Problem Three

// Calculate properties of a circle, using the definitions[here](http: //math2.org/math/geometry/circles.htm).
//         *
//         Store a radius into a variable.*Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".*Calculate the area based on the radius, and log "The area is `areaOfCircle`".*Hint: https: //www.w3schools.com/jsref/jsref_pi.asp

//         ##Problem Four

//         Temperature Converter:
//         *
//         Store a celsius temperature into a variable.*Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".*Now store a fahrenheit temperature into a variable.*Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."


//         ##
//         Problem Five

//         Grades Calculator:
//         *
//         Store Alices 's grade on a test to a variable *
//         Store Bob 's grade on a test to a variable *
//         Store Cam 's grade on a test to a variable *
//         Find the average grade of all students *
//         Store Dee 's grade on a test to a variable *
//         Find the average grade of all students *
//         Print out
//         if Dee 's grade is higher than the class average

//         ##
//         Problem Six: Predict the output

//         For this section write what you think will be logged as a comment next to `console.log`
//         like so: `console.log('Cat') //'Cat'`
//         before running the code.Then execute your file and compare with your prediction.

//         a.
//         ``
//         `js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)
//     `
//         ``

//         b.
//         ``
//         `js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)
//     `
//         ``

//         c.
//         ``
//         `js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))
//     `
//         ``