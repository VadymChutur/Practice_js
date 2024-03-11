const string = 'qWeRTzxcV';
// const letters = string.split('');
// let invertedString = '';

const changeCaseIsString = function (items = string) {
  const letters = items.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCaseIsString('qweRTY'));
console.log(changeCaseIsString('mAngo'));
console.log(changeCaseIsString('AjAx'));
console.log(changeCaseIsString());
