var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let official = parseInt(lines[0]);
let hours_Worked = parseInt(lines[1]);
let hour_value = parseFloat(lines[2]);

let salary = hours_Worked * hour_value;

console.log("NUMBER = " + official);
console.log("SALARY = U$ " + salary.toFixed(2));