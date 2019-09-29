//problem one - age calculator

let birthYear = 1984
console.log(birthYear);

let futureYear = 3084
console.log(futureYear);

console.log(futureYear - birthYear);

let futureAge = 1100

console.log('i will be ' + futureAge + 'in ' + futureYear);

//problem two - snack supply calculator

let myCurrentAge = 35
let maximumAge = 100
let snackAmountPerDay = 14
let snackNumber = 910
console.log((maximumAge - myCurrentAge) * snackAmountPerDay);
console.log('I will need ' + snackNumber + ' to last me until the age of ' + maximumAge);

//problem three 

let radius = 4
// 2 PI * radius = circumference 
let PI = 3.141592
console.log((2 * PI) * radius);
let circumferenceResult = 25.132736
console.log('the circumference is ' + circumferenceResult);
radius= 16
// area = PI r^2
console.log(PI * radius);
let areaOfCircle = 50.265472
console.log('the area is ' + areaOfCircle);


//problem four - temperature converter
let tempInCelsius = 2
console.log(tempInCelsius* 32);
let tempInFarenheit = 64
console.log(tempInCelsius + ' is ' + tempInFarenheit);
tempInFarenheit = 128
console.log(tempInFarenheit / 32);
console.log(tempInFarenheit + ' is ' + tempInCelsius);


//problem five - grades calculator
let aliceGrade = 65
let bobGrade = 60
let camGrade = 75
console.log((aliceGrade + bobGrade + camGrade) / 3);
let firstAverage = 66.67
let deeGrade = 80
console.log((firstAverage + deeGrade) / 2);
let finalAverage = 73
if(deeGrade > finalAverage){console.log('dee has the highest grade in class')} else{console.log('dee does not have the highest grade in class')
}
// true


//problem six - predict the output

// prediction = 10
let num1 = 2
let num2 = 5
// let num3 = num1 * num2
console.log(num1 * num2);
let num3 = 10

// prediction = 'jello'
let str = 'jel'
str += 'lo'
console.log(str);
// answer = 'jello'


// prediction = string
let string = 'my favorite number is '
let number = 42
let sentence = string + number
console.log(typeof(sentence));
//typeOf = string







