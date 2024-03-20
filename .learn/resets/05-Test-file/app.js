let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
let oneDollarIs = {
    "JPY": 151.22, // japan yen
    "EUR": 0.92, // us dollar
    "GBP": 0.78, // british pound
}
let oneYenIs = {
    "EUR": 0.0061, // japan yen
    "USD": 0.0066, // us dollar
    "GBP": 0.0052, // british pound
}
let onePoundIs = {
    "JPY": 193.46, // japan yen
    "USD": 1.28, // us dollar
    "EUR": 1.17, // british pound
}


const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    
    let valueInYen = valueInEuro * 156.5;
    
    return valueInYen;
}
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.5;
    
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.87;
    
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }