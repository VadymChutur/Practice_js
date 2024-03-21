// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// };

// const add = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({
//   a: 5,
// });

// console.log(arrowFnA());

const filter = (array, test, number) => {
  const filteredArray = [];

  for (const el of array) {
    // console.log(el);
    // console.log(test);

    if (test(el, number)) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

const callback1 = (value, number) => value >= number;

const callback2 = (value, number) => value <= number;

const r1 = filter([1, 2, 3, 4, 5], (value, number) => value >= number, 2);
console.log(r1);

const r2 = filter(
  [1, 2, 3, 4, 5, 6, 7, 8],
  (value, number) => value <= number,
  3
);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = (fruit, quantity) => fruit.quantity >= quantity;

const getFruitsWithFresh = (fruit) => fruit.isFresh;

console.log(filter(fruits, getFruitsWithQuantity, 170));

console.log(filter(fruits, getFruitsWithFresh));
