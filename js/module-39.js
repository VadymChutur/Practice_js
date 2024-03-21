const fnA = function (parametr) {
  const innerVariable = 'Значення внутрішньої змінної функції fnA';

  const innerFunction = function () {
    console.log(parametr);
    console.log(innerVariable);
    console.log('Це виклик innerFunction');
  };

  return innerFunction;
};

// const fnB = fnA(555);

// console.log(fnB);
// fnB();

// const makeDish = function (sheffName, dish) {
//   console.log(`${sheffName} готує ${dish}`);
// };

// makeDish('Mango', 'Пиріжечок');
// makeDish('Mango', 'Омлет');
// makeDish('Mango', 'Чай');

// makeDish('Poly', 'Котлетку');
// makeDish('Poly', 'Супчік');
// makeDish('Poly', 'Каву');

const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
  };
  return makeDish;
};

const mango = makeSheff('Mango');
const poly = makeSheff('Poly');
// console.log(mango);

// console.dir(mango);
// mango('Пиріжечок');
// mango('Омлет');
// mango('Чай');

// poly('Котлетку');

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint);
const withDecimals = Number(floatingPoint.toFixed(2));

const rounder = function (number, places) {
  return Number(number.toFixed(places));
};

// console.log(rounder(3.4578, 2));
// console.log(rounder(3.4578, 3));
// console.log(rounder(3.4578, 4));
// console.log(rounder(3.4578, 1));

const rounderNew = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounderNew(2);
const rounder3 = rounderNew(3);

// console.log(rounder2(3.45678));
// console.log(rounder3(3.45678));

const myLibFactory = function () {
  let value = 0;
  const add = function (num) {
    value += num;
  };

  const getValue = function () {
    return value;
  };

  return {
    add,
    getValue,
  };
};

const myLib = myLibFactory();

// console.dir(myLib);
// console.log(myLib.getValue());
// console.log(myLib.add(5));
// console.log(myLib.add(5));
// console.log(myLib.add(5));
// console.log(myLib.getValue());

const salaryManegerFactory = function (employeeName, baseSalary) {
  let salary = baseSalary;

  const changeBy = function (amount) {
    salary += amount;
  };

  return {
    raise(amount) {
      changeBy(amount);
    },
    lower(amount) {
      changeBy(amount);
    },
    current() {
      return `Поточна заробітна плата ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManegerFactory('Mango', 5000);

console.log(salaryManager.current());
console.log(salaryManager.raise(1000));
console.log(salaryManager.current());
