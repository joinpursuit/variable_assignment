// ## Problem One

// Age Calculator:
//  * Store your birth year in a constant variable.
//  * Store a future year in a variable.
//  * Calculate your 2 possible ages for that year based on the stored values.
//  * For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
//  * Log them to the screen like so: "I will be either `ageMin` or `ageMax` in `futureYear`", substituting the values.


       const birthdate = 1988
       var   future    = 2035 , fage = 0
       
       fage = future-birthdate

       // I've notice that it's more asthetic if the problems has a title, so I add them 
       console.log('\n\nAge Calculator : \n') // I google \n, just to notice that I can avoid '\n' +

       console.log('\n'+'In '+ future + ' I will be either...  AgeMin : ' + fage)
       console.log('\n'+'In '+ future + ' I will be either...  AgeMax : ' + ++fage)




// ## Problem Two

// Snack Supply Calculator:
//  * Store your current age in a variable.
//  * Store a maximum age in a constant variable.
//  * Store an estimated snack amount per day (as a number).
//  * Calculate how many snacks you would eat total, from your current age until the maximum age.
//  * Log the result to the screen like this: "You will need `snackNumber` to last you until the age of `maxAge`".



        const maxage = 70
        var   myage  = 33 , snack = 0.5 , totalsnack = 0

        totalsnack = (maxage-myage) * snack * 365

        console.log('\n\nSnack Supply Calculator : \n') 
        console.log('\n' +'You will need ' + totalsnack + ' to last you until the age of ' + maxage)



// ## Problem Three

// Calculate properties of a circle, using the definitions: http://math2.org/math/geometry/circles.htm 
//  * Store a radius into a variable.
//  * Calculate the circumference based on the radius, and log "The circumference is `circumferenceResult`".
//  * Calculate the area based on the radius, and log "The area is `areaOfCircle`".
//  * Hint: https://www.w3schools.com/jsref/jsref_pi.asp

        const    pi = 3.141592
        var     radius = 12 , circunference = 0 , area = 0
        
        circunference = pi * radius
        area =  pi * (radius*radius)
        
        console.log('\n\nProperties of a circle : \n')
        console.log('\n'+'The circunference is : ' + circunference)
        console.log('\n'+'The area is : ' + area)


// ## Problem Four

// Temperature Converter:
//  * Store a celsius temperature into a variable.
//  * Convert it to fahrenheit and output "`tempInCelsius`°C is `tempInFahrenheit`°F".
//  * Now store a fahrenheit temperature into a variable.
//  * Convert it to celsius and output "`tempInFahrenheit`°F is `tempInCelsius`°C."

        var tempInCelsius = 25 , tempInFahrenheit = 0

        tempInFahrenheit = (tempInCelsius * 9/5) + 32

        console.log('\n\nTemperature Converter : \n')
        console.log('\n' + tempInCelsius +' °C' + ' is ' + tempInFahrenheit + ' °F' )

        var converter = tempInFahrenheit
        converter = (converter - 32) * 5/9

        console.log('\n' + tempInFahrenheit + ' °F' + ' is '+ tempInCelsius + ' °C')


// ## Problem Five

// Grades Calculator:
//  * Store Alices's grade on a test to a variable
//  * Store Bob's grade on a test to a variable
//  * Store Cam's grade on a test to a variable
//  * Find the average grade of all students
//  * Store Dee's grade on a test to a variable
//  * Find the average grade of all students
//  * Print out if Dee's grade is higher than the class average


        var alicetest = 78, bobtest   = 84, camtest   = 95, average = 0

        average = (alicetest + bobtest + camtest)/3

        console.log('\n\nGrades calculator  : \n')
        console.log('\n' + 'Alicess Grade : ' + alicetest)
        console.log('\n' + 'Bobss   Grade : ' + bobtest)
        console.log('\n' + 'Cams    Grade : ' + camtest)
        console.log('\n' + 'Average Grade : ' + average)

        var deetest = 91

        console.log('\n' + 'Dees    Grade : ' + deetest)

        average = (average + deetest)/2
        
        console.log('\n' + 'Average Grade : ' + average)

// ## Problem Six

// Find the last number:
// * You are given a number a. Print the last digit of a.
// * Example
// * Input: 
// * a = 123
// * Output:
// * 3

// Hint:
// Use the remainder % operator.


        var lastdigit = 0, a = 1547

        console.log('\n\nFind the Last number :')
        console.log('\nInput :' + '\n\na = ' + a)

        lastdigit = a % 10

        console.log('\nOutput :\n\n' + lastdigit )




// ## Problem Seven

// Alice's Age
// * x years from now Alice will be y times older than her brother Bob. Bob is 12 years old. How old is Alice?
// * Example 1
// * Input: 
// * x = 3
// * y = 2
// * bob = 12
// * Expected values: 
// * alice = 27
// 
// * Example 2
// * Input: 
// * x = 1
// * y = 3
// * bob = 12
// * Expected values: 
// * alice = 38

// * Hint:
// * alice + x = y * (bob + x)
// * Solve for alice


        const bob = 12
        var     x = 3 , y = 2
        
        console.log('\n\nAlicess age : ')
        console.log('\nImput values :')
        console.log('\nBob = ' + bob)
        console.log('\nx   = ' + x)
        console.log('\ny   = ' + y)
        console.log('\n' + x + ' years from now Alice will be ' +  y +' times older than her brother Bob.')
        console.log('\nAlice = ' + (x = y * (bob) + x))
        
        


// ## Problem Eight

// * Cat and Dog Percentages
// * An animal daycare consists of `numberOfCats` cats and `numberOfDogs` dogs.
// * Print the percentage of dogs in the daycare followed by the percentage of cats in the class. The percentage should be printed rounded down to the nearest integer. For example 33.333333333333 will be printed as 33.
// * Example 
// * Input
// * numberOfCats = 20  
// * numberOfDogs = 60
// * Output:
// * 25% of the daycare animals are cats
// * 75% of the daycare animals are dogs


        var numberOfCats = 20 , numberOfDogs = 60 , percentage = 100

        console.log('\n\nCat and Dog Percentages : ')
        console.log('\nInput :')
        console.log('\nDogs  : ' + numberOfDogs)
        console.log('\nCats  : ' + numberOfCats)
        console.log('\nOutput:')

        percentage = (numberOfCats/(numberOfDogs + numberOfCats)) * 100
        
        console.log('\n' + percentage + '% of the daycare animals are Cats' )
        console.log('\n' + (100 - percentage) + '% of the daycare animals are Dogs')
        



// ## Problem Nine

// * Leap Year Calculator
// * Given a year, determine if it's a leap year.  
// * A leap year is a year containing an extra day. It has 366 days instead of the normal 365 days. 
// * The extra day is added in February, which has 29 days instead of the normal 28 days. 
// * Leap years occur every 4 years. 2012 was a leap year and 2016 will also be a leap year. 
// * The above rule is valid except that every 100 years special rules apply. 
// * Years that are divisible by 100 are not leap years if they are not also divisible by 400. 
// * For example 1900 was not a leap year, but 2000 was. Print "Leap year!" or "Not a leap year!" depending on the year you are provided.


        var year = 2020 
        let leap = false   

        leap = (year % 4 ) || ((year % 100) && (year % 400))


        console.log('\n\nLeap Year Calculator : ')
        console.log('\n Year : ' + year)
        console.log('\nLeap year! ' + leap )
        console.log('\nNot a leap year! '+ leap)

        //I'm not getting the expected answer




// ## Problem Ten: Predict the output

// For this section write what you think will be logged as a comment next to `console.log` like so: `console.log('Cat') //'Cat'` before running the code. Then execute your file and compare with your prediction.

// a. 
//     ```js
//     let num1 = 2
//     let num2 = 5
//     let num3 = num1 * num2
//     console.log(num3)

        '10'
//     ```
                
// b. 
//     ```js
//     let str = 'jel' 
//     str += 'lo'
//     console.log(str)

        'jello'
//     ```

// c. 
//     ```js
//     let string =  'My favorite number is ';
//     let number = 42
//     let sentence = string + number
//     console.log(typeof(sentence))

        'My favorite number is 42'
//     ```


