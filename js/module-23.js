const fnA = function () {
  console.log('Виконуєтся функція А');
  //   fnB();
};

const fnB = function () {
  console.log('Виконуєтся функція B');
  //   fnC();
};

const fnC = function () {
  console.log('Виконуєтся функція C');
};

console.log('Лог до виклику функції А');
fnA();
console.log('Лог після виклику функції А');

console.log('Лог до виклику функції B');
fnB();
console.log('Лог після виклику функції B');

console.log('Лог до виклику функції C');
fnC();
console.log('Лог після виклику функції C');

// const fn = function () {
//   return 555;

//   console.log(1);

//   console.log(2);

//   console.log(3);

//   return 111;
// };

// console.log(fn());
