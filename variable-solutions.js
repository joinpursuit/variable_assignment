// 1)

const birthYear = 1986;
let futureYear = 2025;
let ageMax = futureYear - birthYear;
let ageMin = ageMax - 1;

console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear);

// 2)

let currentAge = 32;
let maxAge = 100;
let snacksPerDay = 2;
let yearsAliveLeft = maxAge - currentAge;
let daysInYear = 365;
let totalDaysLeftAlive = yearsAliveLeft * daysInYear;
let totalLifetimeSnacks = totalDaysLeftAlive * snacksPerDay;

console.log("You will need " + totalLifetimeSnacks + " snacks to last you until the age of " + maxAge + " eating " + snacksPerDay + " per day");

// 3)

let radius = 6;
let circumferenceResult = (Math.PI * (radius * 2));
let areaOfCircle = (Math.PI * (Math.pow(radius, 2)));

console.log("The circumference is " + circumferenceResult);

console.log("The area is " + areaOfCircle);

4)

let tempInCelcius = 50;
let tempInFahrenheit = (tempInCelcius * (9/5) + 32);

console.log(tempInCelcius + " celsius is " + tempInFahrenheit + " fahrenheit");

5)

"10 will be logged";

6)

"'jello' will be logged";

7)

"'string' will be logged";
