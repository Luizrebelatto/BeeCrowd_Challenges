var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var l1 = lines.shift().split(" ");
var l2 = lines.shift().split(" ");

let [x1, x2, y1, y2] = [parseFloat(l1[0]), parseFloat(l2[0]), parseFloat(l1[1]), parseFloat(l2[1])];

let distance = Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));

console.log(distance.toFixed(4));