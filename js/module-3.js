let elementWidth = '50px';
const resultWidth = Number.parseInt(elementWidth);
console.log(resultWidth);
elementWidth = resultWidth;
console.log(elementWidth);

let elementHight = '200.74px';
const resultHeight = Number.parseFloat(elementHight);
console.log(resultHeight);
elementHight = resultHeight;
console.log(elementHight);

let salary = 1300.16472;
const salaryResult = Number(salary.toFixed(2));
console.log(salary);
console.log(salaryResult);
salary = salaryResult;
console.log(salary);

let quantity = '30';
let value = 'This string cannot be reduced to a number';

console.log(Number(quantity));
console.log(Number(value));

const base = 2;
const power = 5;

const resultPow = Math.pow(base, power);

console.log(resultPow);
console.log(base ** power);

// input number
// input pow
// Math.pow
//console.log

// let inputBase = prompt('Input number');
// inputBase = Number(inputBase);

// let inputPow = prompt('Input power');
// inputPow = Number(inputPow);

// const resultPower = inputBase ** inputPow;

// console.log(resultPower);

console.log(Math.random() * 2);
const max = 50;
const min = 30;
const resultRandom = Math.random() * (max - min) + min;
console.log(resultRandom);
console.log(Math.round(resultRandom));
console.log(Math.floor(resultRandom));

const colors = ['blue', 'green', 'red', 'teal'];
const maxColors = colors.length - 1;
const minColors = 0;

const indexColors = Math.round(
  Math.random() * (maxColors - minColors) + minColors
);

const color = colors[indexColors];

document.body.style.background = color;
