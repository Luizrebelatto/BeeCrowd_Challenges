var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalDistance = parseInt(lines.shift());
let fuel = parseFloat(lines.shift());
let media = totalDistance / fuel;

console.log(media.toFixed(3) + " km/l");