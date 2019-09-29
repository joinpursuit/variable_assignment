//Age
let byear = 1994;
let fyear = 2026;
let ageMax = fyear - byear;
let ageMin= ageMax-1;
let futureYear;
console.log("I will be either "+ageMin+ " or "+ageMax+" in "+ "substituing the values");

//Snacks
let rage = 25;
let maxAge = 35;
let snack = 10;
let daysInYear = 365;
let snackPerYear = (snack*daysInYear)
console.log("You will need "+snackPerYear+" to last you until the age of "+ maxAge)

//Area 
let rad = 10;
let diameter = (2* Math.PI)* (rad)
let circumferenceResult = (Math.PI *diameter)
let radSq = (rad * rad)
let areaOfCircle = Math.PI*radSq 
console.log("the circumference based on the radius "+circumferenceResult)
console.log("The area based on the radius "+ areaOfCircle)

//Temperature
let cTemp =60;
let fTempConverstion = (cTemp * 9/5)+32;
let fTemp = 77;
let cTempConverstion = (fTemp -32) * 9/5;
console.log("TempInFahrenheit is "+ cTemp +" nd in Fahrenheit is "+fTempConverstion)
console.log("TempInFahrenheit is "+fTemp+ " and in Celsius is "+cTempConverstion)

//Grade Calculator
let aGrade = 80
let bGrade = 60
let cGrade = 70
let numOfStudents = 3
let sAvg = (aGrade + bGrade + cGrade)/ numOfStudents
console.log("The Avg of "+numOfStudents+ " is "+ sAvg)
let dGrade = 90
numOfStudents = numOfStudents + 1
sAvg= (aGrade + bGrade + cGrade+ dGrade)/ numOfStudents
console.log("The Avg of "+numOfStudents+ " is "+ sAvg)
if(dGrade>sAvg){
    console.log(dGrade)
}

// Predict the outcome
let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3) // Will log 10

let str = 'jel' 
str += 'lo'
console.log(str) // Will log " jello"

let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))// Will log string


