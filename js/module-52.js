// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this: ', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this: ', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

const showThis = function () {
  console.log('showThis -> this', this);
};

console.dir(showThis);
showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 10, 20, 30);
showThis.apply(objA, [10, 20, 30]);

const changeColor = function (color) {
  console.log('changeColor -> this', this);
  this.color = color;
};

const hat = {
  color: 'black',
};

changeColor.call(hat, 'orange');
console.log(hat);

const sweater = {
  color: 'green',
};

changeColor.call(sweater, 'blue');
console.log(sweater);

const changeHatColor = changeColor.bind(hat);

changeHatColor('yelow');
console.log(hat);
