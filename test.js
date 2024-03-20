test("One euro should be 1.07 dollars", function() {
    
    const { fromEuroToDollar } = require('./app.js');

    
    const dollars = fromEuroToDollar(3.5);

    
    const expected = 3.5 * 1.07;

   
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One euro should be 156.5 yens", function() {
    
    const { fromEuroToYen } = require('./app.js');

    
    const yens = fromEuroToYen(3.5);

    
    const expected = 3.5 * 156.5;

   
    expect(fromEuroToYen(3.5)).toBe(547.75); 
})

test("One euro should be 0.87 pounds", function() {
    
    const { fromEuroToPund } = require('./app.js');

    
    const pounds = fromEuroToPund(3.5);

    
    const expected = 3.5 * 0.87;

   
    expect(fromEuroToPund(3.5)).toBe(3.045); 
})

test("One dollar should be 151.22 yens", function() {
   
    const { fromDollarToYen } = require('./app.js');

  
    const yens = fromDollarToYen(3.5);

    
    const expected = 3.5 * 151.22;

    
    expect(fromDollarToYen(3.5)).toBe(529.27); 
})

test("One dollar should be 0.92 euros", function() {
   
    const { fromDollarToEuro } = require('./app.js');

    
    const euros = fromDollarToEuro(3.5);

    
    const expected = 3.5 * 0.92;

    
    expect(fromDollarToEuro(3.5)).toBe(3.22); 
})

test("One dollar should be 0.92 pounds", function() {
   
    const { fromDollarToPound } = require('./app.js');

    
    const punds = fromDollarToPound(3.5);

    
    const expected = 3.5 * 0.78;

    
    expect(fromDollarToPound(3.5)).toBe(2.73); 
})

test("One yen should be 0.0061 euros", function() {
   
    const { fromYenToEuro } = require('./app.js');

    
    const euros = fromYenToEuro(3.5);

    
    const expected = 3.5 * 0.0061;

    
    expect(fromYenToEuro(3.5)).toBe(0.02135); 
})

test("One yen should be 0.0066 dollars", function() {
   
    const { fromYenToDollar } = require('./app.js');

    
    const dollars = fromYenToDollar(3.5);

    
    const expected = 3.5 * 0.0066;

    
    expect(fromYenToDollar(3.5)).toBe(0.0231); 
})

test("One yen should be 0.0052 pounds", function() {
   
    const { fromYenToPound } = require('./app.js');

    
    const punds = fromYenToPound(3.5);

    
    const expected = 3.5 * 0.0052;

    
    expect(fromYenToPound(3.5)).toBe(0.0182); 
})

test("One pound should be 193.46 yens", function() {
   
    const { fromPoundToYen } = require('./app.js');

    
    const yens = fromPoundToYen(3.5);

    
    const expected = 3.5 * 193.46;

    
    expect(fromPoundToYen(3.5)).toBe(677.11); 
})

test("One pound should be 1.28 dollars", function() {
   
    const { fromPoundToDollar } = require('./app.js');

    
    const dollars = fromPoundToDollar(3.5);

    
    const expected = 3.5 * 1.28;

    
    expect(fromPoundToDollar(3.5)).toBe(4.48); 
})

test("One pound should be 1.17 euros", function() {
   
    const { fromPoundToEuro } = require('./app.js');

    
    const euros = fromPoundToEuro(3.5);

    
    const expected = 3.5 * 1.17;

    
    expect(fromPoundToEuro(3.5)).toBe(4.095); 
})