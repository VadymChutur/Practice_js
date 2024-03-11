const fn = function (item, ...arr) {
  //   console.log(arguments);
  //   const arr = Array.from(arguments);
  console.log(arr);
};

fn('hello', 1, 2, 3);
fn('aloha', 1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);

const add = function (...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));

const filterNumber = function (arr, ...args) {
  let result = [];

  for (const element of arr) {
    // console.log(element);
    if (args.includes(element)) {
      console.log('Цей елемент присутній в обох масивах: ', element);
      result.push(element);
    }
  }

  return result;
};

console.log(filterNumber([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumber([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumber([100, 200, 300, 400, 500], 7, 12, 200, 64));
