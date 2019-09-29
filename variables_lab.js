
//# Variable Exercises


//## Problem One

//Age Calculator:
 //* Store your birth year in a variable.
 let birthyear = 1982;
 //* Store a future year in a variable.
 let futureyear = 2057;
 //* Calculate your 2 possible ages for that year based on the stored values.
 let age+1 = futureyear - birthyear;
 //* For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
 let age-1 = age+1 - 1; 
 //* Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.
console.log("I will be either `age+1` or `age-1` in `futureyear`", );



//## Problem Two

//Snack Supply Calculator:
 //* Store your current age in a variable.
 let curAge = 37;
 //* Store a maximum age in a variable.
 let maxAge = 110;
 //* Store an estimated snack amount per day (as a number).
 let snackX = 1;
 //* Calculate how many snacks you would eat total, from your current age until the maximum age.
 let snackYear = snackX * 365;
 let totalSnack = snackYear * (maxAge - curAge);
 //* Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".
 console.log("You will need `totalSnack` to last you until the age of `maxAge`");
//# Variable Exercises


//## Problem Three

//Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
 //* Store a radius into a variable.
 //let cirRadius = 360
 //* Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
 //* Calculate the area based on the radius, and log "The area is `areaOfCircle`".
 //* Hint: https://www.w3schools.com/jsref/jsref_pi.asp
 //* 
 * let radius = 7;
   let diameter = radius * 2;
   let circumf= Mpi * diameter; 
   let area = Mpi * radius * radius;
   console.log('The circumference is: ' + circumf);
   console.log('The area is: ' + area);
//Properties of a circle

//## Problem Four

//Temperature Converter:
 //* Store a celsius temperature into a variable.
 let tempInCelsius = 0
 //* Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
 let tempInFahrenheit = (tempInCelsius * 1.8) + 32;
 //* Now store a fahrenheit temperature into a variable.
 let tempInFehrenheit = 32;
 //* Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."
 let tempInCelsius = (tempInFehrenheit - 32) / 1.8;



//## Problem Five

//Grades Calculator:
// * Store Alices's grade on a test to a variable
  let aGrade = X;
// * Store Bob's grade on a test to a variable
  let bGrade = y;
// * Store Cam's grade on a test to a variable * Find the average grade of all students
  let cGrade = z;
  let abc = x + y + z;
  let ave3 = abc / 3;
  console.log(ave3);
// * Store Dee's grade on a test to a variable
  let dGrade = a;
 //* Find the average grade of all students
 let abcd = acb + a;
 let ave4 = abcd / 4;
 console.log(ave4);
 if (dGrade > ave4){
     console.log("Dee's grade is higher than class average")
    }
//* Print out if Dee's grade is higher than the class average

//## Problem Six: Predict the output
//For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

a.
   let num1 = 2;
   let num2 = 5;
   let num3 = num1 * num2;
   console.log(num3);

b. 
   let str = "jel";
   str += "lo";
   console.log(str);

c.
   let string = "My favorite number is ";
   let number = 42;
   let sentence = string + number;
   console.log(typeof(sentence));
   