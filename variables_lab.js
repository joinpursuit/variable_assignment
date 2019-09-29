let mybirthyear = 1989
let futureyear = 2030
let agemax = futureyear - mybirthyear
let agemin = agemax - 1
console.log ("I will be either " + agemax + " or " + agemin + " in " + futureyear);
let currentage = 29
let maxage = 41
let snackperday = 5
let snackperyear = (365 * snackperday) * (maxage - currentage)
console.log ("you will need " + snackperyear + " snacks to last you until the age of " + maxage);
let diameter = 10
let radius = diameter/2
let PI = 3.14
console.log ("The circumferance is " + (PI * diameter));
console.log ("The area is " + (Math.pow(radius , '2') * PI));
let celsiustemp = 25
let tempfahrenheit = (celsiustemp * 9/5) + 32 
console.log (celsiustemp + "°C " + "is " + tempfahrenheit + "°F ");
let tempinfahrenheit = 77
let celsiustemperature = (tempinfahrenheit - 32) * (5/9) 
console.log (tempinfahrenheit + "°F " + "is " + celsiustemperature + "°C");
let Alicesgrade = 100
let Bobsgrade = 89
let camsgrade = 92
let Averagegrade = (Alicesgrade + Bobsgrade + camsgrade) /3
let Deesgrade = 94
let Allaverage = ((Averagegrade * 3) + (Deesgrade)) /4
(Deesgrade > Allaverage)
console.log (Deesgrade);
let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3); // "10"
    let str = 'jel' 
    str += 'lo'
    console.log(str);// "jello"
    let string =  'My favorite number is ';
    let number = 42
    let sentence = string + number
    console.log(typeof(sentence));//"string"