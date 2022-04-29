var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let volume = (4/3) * 3.14159 * Math.pow(parseInt(input),3);

console.log("VOLUME = " + volume.toFixed(3));