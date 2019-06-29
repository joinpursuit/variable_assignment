/* 1. Age Calculator:
    * Store your birth year in a variable.
    * Store a future year in a variable.
    * Calculate your 2 possible ages for that year based on the stored values.
    * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
    * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values. */
    let birthYear = 1994;
    let futureYear = 2030;
    let ageMin = futureYear - birthYear;
    let ageMax = ageMin + 1;
    console.log("I will be either " + ageMin + " or " + ageMax + " in " + futureYear)

  /*  2. Snack Supply Calculator:
        * Store your current age in a variable.
        * Store a maximum age in a variable.
        * Store an estimated snack amount per day (as a number).
        * Calculate how many snacks you would eat total, from your current age until the maximum age.
        * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`". */

        let age = 25;
        let maxAge = 28;
        let snackPerDay = 2;
        let result = ((maxAge - age) * 365) * 2
        console.log("You will need " + result + " to last you until the age of " + maxAge)

/*        3. Calculate properties of a circle, using the definitions [here](http://math2.org/math/geometry/circles.htm).
            * Use google: find how to get the number `PI` in JavaScript.
            * Store a radius into a variable.
            * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
            * Calculate the area based on the radius, and log "The area is `areaOfCircle`". */

            let radius = 4;
            let circumferenceResult = radius * 2 * Math.PI;
            let areaOfCircle = Math.PI * Math.pow(radius,2);
            console.log("The circumference is " + circumferenceResult);
            console.log("The area is " + areaOfCircle);

          /*  4. Temperature Converter:
                * Store a celsius temperature into a variable.
                * Convert it to fahrenheit and output "`tempInCelcius`°C is `tempInFahrenheit`°F".
                * Now store a fahrenheit temperature into a variable.
                * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelcius`°C." */

         let Ctemp = 10;
         let Ftemp = Ctemp * (9/5) + 32;
         console.log(Ctemp + "C is" + Ftemp +"F ");
         let Ftemp2 = 78;
         let Ctemp2 = (Ftemp2 - 32) * (5/9);
         console.log(Ftemp2 + "F is" + Ctemp2 +"C ");

         5.

             let num1 = 2
             let num2 = 5
             let num3 = num1 * num2
             console.log(num3) //10


         6.

             let str = 'jel'
             str += 'lo'
             console.log(str) //jello


         7.

             let string =  'My favorite number is ';
             let number = 42
             let sentence = string + number
             console.log(typeof(sentence)) //string
