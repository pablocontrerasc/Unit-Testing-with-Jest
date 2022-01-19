const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

var fromEuroToDollar = (euro) => {
    let total = euro * oneEuroIs.USD
    return total
}

var fromDollarToYen = (dolar) => {
    let total = (dolar / oneEuroIs.USD ) * oneEuroIs.JPY
    return total
}

var fromYenToPound = (yen) => {
    let total = (yen / oneEuroIs.JPY)  * oneEuroIs.GBP
    return total
}

// let ue = fromEuroToDollar(3.5)
// console.log(ue)
// let dl = fromDollarToYen(1.2)
// console.log(dl)
// let yn = fromYenToPound(127.9)
// console.log(yn)
//let moneda = fromEuroToDollar(3.5)
//console.log(moneda)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }