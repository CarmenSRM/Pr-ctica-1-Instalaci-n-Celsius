//Se inyectan las funciones de la dependencia de forma individual.
const { toCelsius } = require('celsius');
const { toFahrenheit } = require('celsius');

// Código de prueba
console.log(toCelsius(100)); // 38
console.log(toCelsius(100, 3)); // 37.778
console.log(toCelsius('105.981 degrees F', 5)); // 41.10056

console.log(toFahrenheit(36)); // 97
console.log(toFahrenheit(36.68, 3)); // 98.024
console.log(toFahrenheit('-40.691 degrees C', 5)); // -41.24380
//Se agregaron los console.log(); para poder visualizar el resultado.

//Se inyecta la dependencia completa en una contante --permite que se puedan acceder a ambas funciones con una misma constante--
const conu = require('celsius');

//Código de prueba
console.log(conu.toCelsius(100));
console.log(conu.toFahrenheit(36));
//Se agregaron los console.log(); para poder visualizar el resultado.