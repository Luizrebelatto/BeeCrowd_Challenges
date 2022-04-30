var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distance = parseInt(lines);

if (distance <= 800) {
  console.log('1');
} else if (distance > 800 && distance <= 1400){
  console.log('2');
} else {
  console.log('3');
}