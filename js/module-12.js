const btnAdd = document.querySelector('button[data-add');
const btnSub = document.querySelector('button[data-sub]');
const btnClr = document.querySelector('button[data-clr]');
const valueInput = document.querySelector('input[data-value]');
const output = document.querySelector('p[data-output] span');

console.log(btnAdd);
console.log(btnSub);
console.log(btnClr);
console.log(valueInput);
console.log(output);

let total = 0;

btnAdd.addEventListener('click', function () {
  const value = Number(valueInput.value);

  total += value;

  //   console.log('click');

  //   console.log('total: ', total);

  output.textContent = total;

  valueInput.value = '';
});

btnSub.addEventListener('click', function () {
  const value = Number(valueInput.value);

  total -= value;

  output.textContent = total;
  valueInput.value = '';
});

btnClr.addEventListener('click', function () {
  total = 0;
  output.textContent = total;
});
