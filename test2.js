
let mybirthyear = 1990;
let currentyear = 2020;
let ageMin = currentyear - mybirthyear - 1
let ageMax = currentyear - mybirthyear;
console.log('My will be either ' + ageMin +" or my age is " + ageMax);


let myAge = 29
let maxAge = 75
let snackYear = 365 * (maxAge - myAge)
let snackNumber = 1 * snackYear
console.log(snackNumber)



let radius = 3
let circumference =2*Math.PI * radius
console.log('Circumference Result '+ circumference)
console.log('Area of Circle ' + Math.PI *(radius * radius))


 
let celsiusT = 23
let fahrenheitT = 74
let tempofFahrenheit = (9/5) *celsiusT + 32
let tempofCelsiusT = (5/9)*(fahrenheitT - 32)
console.log('Celsius of ' + celsiusT + '°C' + ' is Fahrenheit of '+ tempofFahrenheit +'°F')
console.log('Fahrenheit of ' + fahrenheitT + '°F' + ' is Celisius of '+ tempofCelsiusT +'°C')



let alicsG = 90;
let bobG = 74;
let camG = 45;
let average = (alicsG + bobG + camG) / 3;
console.log('class average is '+ average);
let deeG = 94;
deeG = 45;
var classG = [alicsG, bobG, camG, deeG];
console.log('new Avg is ' + (alicsG + bobG + camG + deeG) / 4);
console.log('hightest grade is ' + Math.max(alicsG, bobG, camG, deeG));
if (deeG > average){
    console.log("Dee's grade is higer than average")}
    else{
console.log("Dee's grade is NOT higer than ave class")
};



// let num1 = 2
// let num2 = 5
// let num3 = num1 * num2
// console.log(num3)//10
// let str = 'jel' 
// str += 'lo'
// console.log(str)//jello

// let string =  'My favorite number is ';
// let number = 42
// let sentence = string + number
// console.log(typeof(sentence))//string