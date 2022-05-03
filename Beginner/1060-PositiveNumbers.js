var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n').map(Number);

var positiveNumbers = lines.filter(element => element > 0);
console.log(positiveNumbers.length + " valores positivos");