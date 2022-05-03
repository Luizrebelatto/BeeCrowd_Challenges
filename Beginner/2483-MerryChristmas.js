var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let times = parseInt(input);
let letter = 'a';

console.log(`Feliz nat${letter.repeat(times)}l!`);