var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let name = lines.shift();
let salaryFixed = parseFloat(lines.shift());
let totalSales = parseFloat(lines.shift());

let totalSalary = salaryFixed + (totalSales * 0.15);

console.log("TOTAL = R$ " + totalSalary.toFixed(2));