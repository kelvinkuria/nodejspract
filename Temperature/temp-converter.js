function celciusToFahrenheit(celcius){
    return (celcius * 9/5) + 32;
}

function fahrenheitToCelcius(fahrenheit){
    return (fahrenheit - 32) *5/9;
}

function celciusToKelvin(celcius){
    return celcius + 273.15;
}

module.exports= {celciusToFahrenheit,fahrenheitToCelcius,celciusToKelvin};