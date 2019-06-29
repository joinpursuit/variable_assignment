variable lab assignment 
const birthyear = 1996;
let maxYear = 2030;
let minYear = 2029;
console.log(maxYear - birthyear);
console.log(minYear - birthyear);

let answer = "I will be" + " " + (maxYear- birthyear) + " " + "or " + (minYear - birthyear) + " " + "in" + " "+ (maxYear);
console.log( answer);


const currentAge = 22;
let maxAge = 80;
let snackPerDay = 2;
console.log((maxAge - currentAge)*2*365);

let answer = "You will need " + ((maxAge - currentAge)*2*365) + " to last you until the age of" + " " + (maxAge);
console.log(answer);



let radius = 4;
let circumferenceResult = (2 * radius) * Math.PI;
console.log(circumferenceResult);
let answer = "The circumference is " + (circumferenceResult);
 console.log(answer);
 let areaOfCircle = Math.PI * (radius * radius)
 console.log(areaOfCircle);
 let answerofarea = "The area is" + " " + (areaOfCircle);
 console.log(answerofarea);



let celsius = 26;
let tempInFahrenheit= (celsius * (9/5) + 32);

console.log(tempInFahrenheit);
let answer = "tempInCelcius is" + " " + (tempInFahrenheit);
console.log(answer);

let fahrenheit = 100
let tempInCelcius = ((fahrenheit - 32) * (5/9));
console.log(tempInCelcius);
let answerCelcius= "tempInFahrenheit is" + " " + (tempInCelcius);
console.log(answerCelcius);

let num1 = 2
let num2 = 5
let num3 = num1 * num2
console.log(num3)
// 2 and 5 will multiply and equal to 10. I was correct because num3= 2 * 5.

let str = 'jel'
str += 'lo'
console.log(str)
// The answer will be jello because its combining 2 strings together. I was correct because jel and lo combined.


let string =  'My favorite number is ';
let number = 42
let sentence = string + number
console.log(typeof(sentence))
// You will get a string because let sentence = My favorite number is 42.
// when solving console.log(type of(sentence)) the answer is a string because it has the word typeof.
// I was correct because typeof was looking to find what type of operator is sentence.
