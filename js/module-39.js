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

console.dir(mango);
mango('Пиріжечок');
mango('Омлет');
mango('Чай');

poly('Котлетку');

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
