var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let distance = parseInt(input);

console.log(distance * 2 + " minutos");