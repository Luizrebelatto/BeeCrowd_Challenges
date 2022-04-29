var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A , B, C] = lines.shift().split(" ").map(Number);

let triangleArea = (A * C) /2;
let circleArea = 3.14159 * Math.pow(C,2);
let trapezoid  = ((A + B) * C)/2;
let square = Math.pow(B, 2);
let retangle = A * B;


console.log("TRIANGULO: " + triangleArea.toFixed(3));
console.log("CIRCULO: " + circleArea.toFixed(3));
console.log("TRAPEZIO: " + trapezoid.toFixed(3));
console.log("QUADRADO: " + square.toFixed(3));
console.log("RETANGULO: " + retangle.toFixed(3));