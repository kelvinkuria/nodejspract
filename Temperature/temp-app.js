const {celciusToFahrenheit, fahrenheitToCelcius, celciusToKelvin} = require('./temp-converter');

const tempInCelsius = 25;
const tempinFahrenheit = 70;


console.log(`${tempInCelsius}C is ${celciusToFahrenheit(tempInCelsius)}F`);

console.log(`${tempinFahrenheit}F is ${fahrenheitToCelcius(tempinFahrenheit)}C`);

console.log(`${tempInCelsius}C is ${celciusToKelvin(tempInCelsius)}K`);