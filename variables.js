/* 1.Age Calculator:
    * Store your birth year in a variable.
    * Store a future year in a variable.
    * Calculate your 2 possible ages for that year based on the stored values.
    * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values. */
    const yob = 1980;
    let current = 2019;
    let fy = 2026;
    myAge = current-yob;
    ageMax = fy-yob;
    ageMin = fy-yob-1;
    console.log("My current age " + myAge + ". I will be either " + ageMax + " in the future or I'll be " + ageMin + " MY YOUTH-in 2026!")

    /*2. Snack Supply Calculator:
        * Store your current age in a variable.
        * Store a maximum age in a variable.
        * Store an estimated snack amount per day (as a number).
        * Calculate how many snacks you would eat total, from your current age until the maximum age.
        * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".*/

        const myAge2019 = 38;
        let maxAge = 50;
        let snackNumber = 3;
        totalSnack = (maxAge - myAge2019) * snackNumber;
        console.log("I will need " + totalSnack + " snacks to last me until the age of " + maxAge)

  /*3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
        * Use google: find how to get the number `PI` in JavaScript.
        * Store a radius into a variable.
        * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
        * Calculate the area based on the radius, and log "The area is `areaOfCircle`".*/
        let radius = 5
        let circumferenceResult = Math.PI * radius * 2;
        console.log("The circumference is " + circumferenceResult)
        let areaOfCircle =  Math.PI * Math.pow(radius,2)
        console.log("The area is " + areaOfCircle)
    /*4. Temperature Converter:
            * Store a celsius temperature into a variable.
            * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
            * Now store a fahrenheit temperature into a variable.
            * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C."*/

        let inCelcius = 5;
        tempInFahrenheit = (9/5 * inCelcius)+ 32;
        console.log(inCelcius + "°C is " + tempInFahrenheit + "°F");
        let inFahrenheit = 90;
        tempInCelcius = (5/9 * inFahrenheit)-32;
        console.log(inFahrenheit + "°F is " + tempInCelcius + "°C");
 //5.
    let num1 = 2
    let num2 = 5
    let num3 = num1 * num2
    console.log(num3) //it will return the value 10. It will multiply 2*5. My
    //answer was correct.

// 6.
      let str = 'jel'
      str += 'lo'
      console.log(str) //it will return jello. It will concatenate jel + lo
      //I was correct.
//7.
      let string =  'My favorite number is ';
      let number = 42
      let sentence = string + number
      console.log(typeof(sentence))// it will return the value string. Joining
      //alphanumeric content. I was correct!!!
