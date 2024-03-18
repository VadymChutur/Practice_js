// const fnA = function (message, callback) {
//   console.log(message);

//   console.log(callback);
//   callback(100);
// };

// const fnB = function (number) {
//   console.log('Це лог при виклику fnB', number);
// };

// fnA('string', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);

//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 3, sub);

const buttonRef = document.querySelector('.js-button');

console.log(buttonRef);

const handleBtnClick = function () {
  console.log('Клік по кнопці');
};

buttonRef.addEventListener('click', handleBtnClick);

const onGetPositionSucsess = function (position) {
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSucsess,
//   onGetPositionError
// );

const callback = function () {
  console.log('Цей лог в коді через 2 секунди');
};

// console.log('В коді перед таймаутом.');

// setTimeout(callback, 2000);

// console.log('В коді після таймаута.');

// API URL https://pokeapi.co/api/v2/poremon

const onRecquestSuccess = function (response) {
  console.log(
    'Викелик функції onRecquestSuccess після успішної відповіді від бекенда.'
  );
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then((res) => res.json())
//   .then(onRecquestSuccess);

const filter = function (array, test, number) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);

    if (test(el, number)) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = function (value, number) {
  return value >= number;
};

const callback2 = function (value, number) {
  return value <= number;
};

console.log(filter([1, 2, 3, 4, 5], callback1, 2));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], callback2, 3));

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit, quantity) {
  return fruit.quantity >= quantity;
};

const getFruitsWithFresh = function (fruit) {
  return fruit.isFresh;
};

console.log(filter(fruits, getFruitsWithQuantity, 170));

console.log(filter(fruits, getFruitsWithFresh));
