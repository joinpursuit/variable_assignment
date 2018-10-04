//Question 1
let birthYear = 1990,
  futureYear = 3156,
  ageMin = futureYear - birthYear,
  ageMax = futureYear - birthYear - 1;
console.log(
  "I will be either " + ageMin + " or " + ageMax + " in " + futureYear
);

//Question 2
let currentAge = 27,
  maxAge = 100,
  snacksPerDay = 5,
  totalSnacks = (maxAge - currentAge) * snacksPerDay * 365;
if (totalSnacks > 1)
  console.log(
    "You will need " +
      totalSnacks +
      " snacks to last you until the age of " +
      maxAge
  );
else if (totalSnacks === 1) console.log("You only need to eat 1 snack!!!");
else console.log("You don't need any snacks!!!");

//Question 3
let pi = Math.PI,
  radius = 5,
  diameter = radius * 2,
  circumference = pi * diameter,
  area = pi * (radius * radius);
console.log("The circumference is " + circumference);
console.log("The area is " + area);

//Question 4
let celsiusTemp = 55,
  celsiusToFahrenheit = celsiusTemp * (9 / 5) + 32,
  fahrenheitTemp = 38,
  fahrenheitToCelsius = (fahrenheitTemp - 32) * (5 / 9);
// c -> f: (°C × 9/5) + 32 = 32°F
// f -> c: (°F − 32) × 5/9 = 12.778°C
console.log(celsiusTemp + "°C is " + celsiusToFahrenheit + "°F");
console.log(fahrenheitTemp + "°F is " + fahrenheitToCelsius + "°C");

//Question 5
// 2 * 5 =
10;

//Question 6
//'jel' += 'lo' =
("jello");

//Question 7
// 'My favorite number is ' + 42 = 'My favorite number is 42' =
string;
