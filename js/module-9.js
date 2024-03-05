// for (let i = 0; i < 5; i += 1) {
//   console.log('iter', i);
// }

// 1 створити змінні

// 2 створити цикл для отриманих значень

// 3 створити рандомайзер для змінної

// 4 лог змінної

const employees = 5;
let totalSalary = 0;

const minSalary = 500;
const maxSalary = 5000;

for (let i = 1; i <= employees; i += 1) {
  let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
  console.log(`Зарплата працівника ${i}`, salary);
  totalSalary += salary;
}

console.log('Загальна заробітна плата усіх працівників:', totalSalary);

// 1 створити змінні

// 2 створити цикл

// 3 перевірити чи є число парним

// 4 додати суму чотних чисел у змінну

const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  console.log(i);
  if (i % 2 !== 0) {
    console.log('Непарне число: ', i);
    continue;
  }
  total += i;
}

console.log(total);
