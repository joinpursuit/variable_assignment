//problem one
const birthYear = 1986
let futureYear = 2026
let ageMin = futureYear-(birthYear+1)
let ageMax = (futureYear-birthYear)
console.log (futureYear-birthYear)
console.log ("I will be either "+ageMin+ " or " + ageMax+" in "+futureYear)

//problem two
let currentAge = 33
let maxAge = 40
let dailySnack = 3
let snackNumber = dailySnack*365*(maxAge-currentAge)

console.log ("You will need "+snackNumber+" to last you until the age of "+maxAge)

//problem three
let radius = 6
let circumferenceResult = ((2*radius)*Math.PI)
let areaOfCircle = Math.PI*Math.pow(radius,2)

console.log("The circumference is "+circumferenceResult+".")
console.log("The area is "+areaOfCircle+".")

//Problem four
let tempInCelcius = 40
let tempInFahrenheit  = (tempInCelcius*(9/5))+32

console.log(tempInCelcius+"°C is "+tempInFahrenheit+"°F")

let tempInFahrenheit2  = 104
let tempInCelcius2 = (tempInFahrenheit-32)*(5/9)

console.log(tempInFahrenheit2+"°F is "+tempInCelcius2+"°C."
)

//PROBLEM FIVE
let aliceGrade = 90
let bobGrade = 80
let camGrade = 70
let gradeAvg1 = (aliceGrade+bobGrade+camGrade)/3

console.log("The classe average is "+gradeAvg1)

let deeGrade = 85
let gradeAvg2 = (aliceGrade+bobGrade+camGrade+deeGrade)/4
console.log("The classe average with Dee is "+gradeAvg2)
if(deeGrade>gradeAvg2){console.log("Dee's grade is higher than the class average")} else {console.log("Dee's grade is lower than the class average")}

//Problem six
//6.A 10
let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) //10
//6.B 
let str = 'jel' 
    str += 'lo'
    console.log(str)//JEL
//6.C
let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence)) // STRING