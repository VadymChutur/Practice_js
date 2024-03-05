const salary = 2000;

if (salary < 500) {
  console.log('Level 1');
} else if (salary > 500 && salary < 1500) {
  console.log('Level 2');
} else if (salary > 1500 && salary < 3000) {
  console.log('Level 3');
} else {
  console.log('Level 4');
}

const balance = 1000;

let message = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';

// if (balance > 0) {
//   message = 'Позитивний баланс';
// } else {
//   message = 'Негативний баланс';
// }

console.log(message);
