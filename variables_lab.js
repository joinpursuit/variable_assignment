// Age calculator:
let birthYear = 1995;
let futureYear = 2069;
let ageMin =  futureYear - birthYear;
let ageMax =  ageMin - 1;
console.log('I will either be ' + ageMin + ' or ' + ageMax + ' in ' + futureYear);

// Snack supply calculator:
console.log("\n");
let crrAge = 24;
let maxAge = 100;
let snacksPerDay = 2;
let snacksPerYear = snacksPerDay * 356;
let snackNumber = (maxAge - crrAge) * snacksPerYear;
console.log("If eating " + snacksPerDay + " per day, you will need " + snackNumber + " snacks to last you until the age of " + maxAge); 

// Properties of a Circle:
console.log("\n");
let radius = 2;
let circumferenceResult = 2 * Math.PI * radius;
let areaOfCircle = (Math.PI * Math.pow(radius,2));
console.log("If radius is" + " " + radius + ", " + "the circumference of its circle is:" + " " +
    circumferenceResult + " " + "and" + " " + "the area is:" + " "+ areaOfCircle);

// Temperature Converter:
console.log("\n");
let celsius = 35;
let convertCtoF = (celsius * 9/5) + 32;
console.log(celsius + "°C" + " " + "is" + " " + convertCtoF + "°F");

let fahrenheit = 99;
let convertFtoC = (fahrenheit - 32)/(9/5);
console.log(fahrenheit + "°F" + " " + "is" + " " + convertFtoC + "°C"  );

// Grades Calculator:
console.log("\n");
let alicesGrade = 65;
let bobsGrade = 99;
let camsGrade = 100;
let avgGrade1 = (alicesGrade + bobsGrade + camsGrade) / 3;
console.log("The average grade for Alice, Bob and Cam is" + " " + avgGrade1);
let deesGrade = 100;
let avgGrade2 = (alicesGrade + bobsGrade + camsGrade + deesGrade) / 4;
console.log("The average grade for the whole class is" + " " + avgGrade2);
if (deesGrade >= avgGrade2){
    console.log("Dee's grade:" + " " + deesGrade);
    console.log("Avg Class Grade" + " " + avgGrade2);
    console.log("Dee's grade is HIGHER than the class average");
}
else{
    console.log("Dee's grade:" + " " + deesGrade);
    console.log("Avg Class Grade" + " " + avgGrade2);
    console.log("Dee's grade is LOWER than the class average");
}

// Predict the output

// a. 10
// b. jello
// c. string
