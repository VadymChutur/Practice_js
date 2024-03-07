const numbers = [51, 18, 13, 24, 7, 85, 19];

// 1 створити змінну
// 2 перебрати масив
// 3 порівняти елементи
// 4 якщо елемент меньше за перший замінити

let smalestNumber = numbers[0];
let biggestNumber = numbers[0];

for (const number of numbers) {
  if (number < smalestNumber) {
    smalestNumber = number;
  }
}

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log('Smallest number: ', smalestNumber);
console.log('Biggest number: ', biggestNumber);
