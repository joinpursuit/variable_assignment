
// problem 1
let birthYear = 1994;
let futureYear = 2020;
let ageMin = futureYear - birthYear -1;
let ageMax = ageMin + 1;

console.log('I would be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);




// problem 2 
let currentAge = 25;
let maximumAge = 75;
let snacksPerDay = 5;

let snackNumber = (maximumAge - currentAge) * (365 * snacksPerDay) + ' snacks per day';

console.log('You will need ' + snackNumber + ' to last you till the age of ' + maximumAge);


// problem 3

let pi = Math.PI;
let radius = 10;
let circumferenceResult =2 * pi * radius;
let areaOfCircle = pi * radius * radius;

console.log('The circumference is ' + circumferenceResult);
console.log('The area is ' + areaOfCircle); 


//problem 4

let randomCelsius = 100;
let celsiusToFahrenheit = randomCelsius * 1.8 + 32;
console.log(randomCelsius + 'C is ' + celsiusToFahrenheit + 'F' );

let randomFahrenheit = 32;
let fahrenheitToCelsius = (randomFahrenheit - 32) * (5/9);
console.log(randomFahrenheit + 'F is ' + fahrenheitToCelsius + 'C');

// problem 5

console.log(10); // 10

   let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3);

// problem 6

console.log('jello'); // jello

   let str = 'jel' 
    str += 'lo'
    console.log(str);

// problem 7 

console.log('String'); //String

let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence))

