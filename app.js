let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07, 
    "GBP": 0.87, 
}
let oneDollarIs = {
    "JPY": 151.22, 
    "EUR": 0.92, 
    "GBP": 0.78, 
}
let oneYenIs = {
    "EUR": 0.0061, 
    "USD": 0.0066, 
    "GBP": 0.0052, 
}
let onePoundIs = {
    "JPY": 193.46, 
    "USD": 1.28, 
    "EUR": 1.17, 
}


const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromEuroToYen = function(valueInEuro) {
    
    let valueInYen = valueInEuro * 156.5;
    
    return valueInYen;
}

const fromEuroToPund = function(valueInEuro) {
    
    let valueInPound= valueInEuro * 0.87;
    
    return valueInPound;
}


const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 151.22;
    
    return valueInYen;
}

const fromDollarToEuro = function(valueInDollar) {
    
    let valueInEuro = valueInDollar * 0.92;
    
    return valueInEuro;
}

const fromDollarToPound = function(valueInDollar) {
    
    let valueInPound = valueInDollar * 0.78;
    
    return valueInPound;
}

const fromYenToEuro = function(valueInYen) {
    
    let valueInEuro = valueInYen * 0.0061;
    
    return valueInEuro;
}

const fromYenToDollar = function(valueInYen) {
    
    let valueInDollar = valueInYen  * 0.0066;
    
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen  * 0.0052;
    
    return valueInPound;
}

const fromPoundToYen = function(valueInPound) {
    
    let valueInYen = valueInPound  * 193.46;
    
    return valueInYen;
}

const fromPoundToDollar = function(valueInPound) {
    
    let valueInDollar = valueInPound  * 1.28;
    
    return valueInDollar;
}

const fromPoundToEuro = function(valueInPound) {
    
    let valueInEuro = valueInPound  * 1.17;
    
    return valueInEuro;
}

module.exports = { fromEuroToDollar, fromEuroToPund, fromEuroToYen, fromDollarToYen, fromDollarToEuro, fromDollarToPound, fromYenToPound, fromYenToDollar, fromYenToEuro, fromPoundToYen, fromPoundToDollar, fromPoundToEuro }