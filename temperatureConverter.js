let tempInCelcius = 87
let tempInFahrenheit = 451
let c2F = (tempInCelcius * 1.8) + 32
let f2C = (tempInFahrenheit - 32) * (5 / 9)

console.log(tempInCelcius + 'C' + ' is ' + Math.ceil(c2F) + 'F')
console.log(tempInFahrenheit + 'F' + ' is ' + Math.ceil(f2C) + 'C')
