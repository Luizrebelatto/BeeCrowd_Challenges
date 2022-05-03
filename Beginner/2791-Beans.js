var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split(' ').map(Number);

const isOne = (element) => element == '1';

console.log(lines.findIndex(isOne) + 1);