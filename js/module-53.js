const decrementBtn = document.querySelector('.js-decrement');
console.log(decrementBtn);
const incrementBtn = document.querySelector('.js-increment');
console.log(incrementBtn);
const valueEl = document.querySelector('.js-value');
console.log(valueEl);

const counter = {
  value: 0,
  increment() {
    // console.log('increment -> this: ', this);
    this.value += 1;
  },
  decrement() {
    // console.log('decrement -> this: ', this);
    this.value -= 1;
  },
};

const decrement = () => {
  counter.decrement();

  valueEl.textContent = counter.value;
};
const increment = () => {
  counter.increment();

  valueEl.textContent = counter.value;
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);
