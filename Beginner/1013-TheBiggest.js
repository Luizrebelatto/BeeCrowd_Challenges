var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numbers = lines.shift().split(" ").map(Number);

console.log(Math.max(...numbers) + " eh o maior");