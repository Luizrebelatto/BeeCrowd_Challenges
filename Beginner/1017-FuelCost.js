var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var hours = parseInt(lines.shift());
var distance = parseInt(lines.shift());

let FuelCost = (hours * distance)/12;
 
console.log(FuelCost.toFixed(3));