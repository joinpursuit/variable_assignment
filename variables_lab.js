let birthYear = 1993;
let futureYear = 2050;
let age1 =  futureYear - birthYear;
let age2 =  age1 - 1;
console.log("I will be either " + age1 + " or " + age2 + " in " +futureYear);

// Snack supply calculator
let currentAge = 25;
let maxAge = 77;
let dailySnack = 3;
let totalSnack = (dailySnack*365)*(maxAge-currentAge);
console.log("You will need " + totalSnack + " snacks to last you until the age of " + maxAge); 

//Calculate properties of a circle
let radius = 19;
let circumResult = 2*(Math.PI)*radius;
console.log("the circumference is " + circumResult);
let area = Math.PI*(radius*radius);
console.log("the area of the circle is " + area);

//Temperature converter
let celsiusTemp = 27;
let celToFar = (celsiusTemp*9/5)+32;
console.log(celsiusTemp + " º Celsius are equal to " + celToFar + " º Farenheit");
let farenTemp = 77;
let farToCel = (farenTemp - 32) * 5/9;
console.log(farenTemp + " º Farenheit are equal to " + farToCel + " ºCelsius");

//Grades Calculator
let aliceGrade = 99;
let bobGrade = 89;
let camGrade = 79;
let deeGrade = 99;
let average = (aliceGrade + bobGrade + camGrade + deeGrade)/4;
if (deeGrade > average) {
    console.log ("Dee's grade of " + deeGrade + " is higher than the class average of " + average);
}

//Predict the Product
let num1 = 2 let num2 = 5 let num3 = num1 * num2 console.log(num3)//10
let str = 'jel' str += 'lo' console.log(str)//jello
let string = 'My favorite number is '; let number = 42 let sentence = string + number console.log(typeof(sentence))//string