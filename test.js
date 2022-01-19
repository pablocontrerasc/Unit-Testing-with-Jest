const { sum } = require("./app");


test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
  
    // hago mi comparacion (la prueba)
    
    expect(fromEuroToDollar(3.5)).toBe(4.2);

})

test("1.2 Dollar should be 127.9 yen", function(){
    // importo la funcion desde app.js
    
    const { fromDollarToYen } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1.2)).toBe(127.9);
   
})

test("127.9 yen should be 0.8 pound", function(){
    // importo la funcion desde app.js
    
    const { fromYenToPound } = require('./app.js')
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(127.9)).toBe(0.8);
   
})

