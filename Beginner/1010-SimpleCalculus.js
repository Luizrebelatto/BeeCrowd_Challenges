var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split("\n");

let [cod1, quantity1, value1] = lines.shift().split(" ");
let [cod2, quantity2, value2] = lines.shift().split(" ");

let total = quantity1 * value1 + quantity2 * value2; 

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));