const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11, 14];

let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] % 2 !== 0) {
//     continue;
//     console.log('Не парне', numbers[i]);
//   }

//   total += numbers[i];
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    continue;
  }

  total += number;
}

console.log('Сума парних чисел: ', total);
