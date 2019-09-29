const birthYear = 1984;
let futureYear = 2050;
let ageMax = futureYear - birthYear;
let ageMin = ageMax - 1;
console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);

let currentAge = 2019 - 1984;
let maxAge = currentAge + 50;
let snackDailyAmt = 50;
let snackFave = "chocolates"
let snackRation = snackDailyAmt * maxAge
console.log("You will need " + snackRation + " " + snackFave +  " to last you until the age of " + maxAge);
console.log("You will need " + (snackDailyAmt * maxAge) + " " + snackFave + " to last you until the age of " + maxAge);

let radius = 10;
let diameter = radius * 2;
console.log(diameter * Math.PI);
console.log(Math.PI * (radius*radius))
console.log(Math.PI * (Math.pow(radius, 2)))

let tempCelsius = 50
let tempConvF = tempCelsius * (9/5) + 32
let tempFahrenheit = 100
let tempConvC = (tempFahrenheit - 32) * (5/9)
console.log(tempCelsius + "°C" + " is " + tempConvF + "°F" + " in Fahrenheit")
console.log(tempFahrenheit + "°F" + " is " + tempConvC + "°C" + " in Celsius")

let aliceGrade = 94;
let bobGrade = 80;
let camGrade = 55;
let deeGrade = 95;
let grades = [aliceGrade, bobGrade, camGrade];
let grades2 = [aliceGrade, bobGrade, camGrade, deeGrade];

{
let sum = 0;
  for (let i = 0; i < grades.length; i++){
      sum += grades[i];
  }
  console.log(sum / grades.length);
}

{
    let sum = 0;
      for (let i = 0; i < grades2.length; i++){{
          sum += grades2[i];
      }
      console.log(sum / grades2.length);
    }
    if (deeGrade > (sum / grades2.length)) {
        console.log("Dee beat the class grade average.");
      } else {
        console.log("Dee lost to the class grade bell curvre");
      }}


// Problem Six: Predict the output

//For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3) // 10
//     ```

// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str) // jello
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence)) // string
//     ```