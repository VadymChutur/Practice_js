const stars = 1;
let price;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log('Такого значення не існує');
// }

switch (stars) {
  case 1:
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  case 4:
    price = 70;
    break;

  case 5:
    price = 120;
    break;

  default:
    console.log('Такого значення не існує');
}

console.log(price);

const stars2 = 2;
let price2;

// if (stars2 === 1 || stars2 === 2) {
//   price2 = 20;
// } else if (stars === 3 || stars2 === 4) {
//   price2 = 30;
// } else if (stars === 5) {
//   price2 = 120;
// } else {
//   console.log('Такого значення не існує');
// }

switch (stars2) {
  case 1:
  case 2:
    price2 = 20;
    break;

  case 3:
  case 4:
    price2 = 30;
    break;

  case 5:
    price2 = 120;
    break;

  default:
    console.log('Такого значення не існує');
}

console.log(price2);

// 1 Створити змінну

// 2 створити світч

// 3 в кожному кейсі записати в меседж строку

// 4 створити лог меседж

const option = 1;
let message = '';

switch (option) {
  case 1:
    message = 'Ви можете забрати товар завтра в офісі';
    break;

  case 2:
    message = 'Кур`єр доставить замовлення завтра з 9 до 18';
    break;

  case 3:
    message = 'Посилка буде відправлена сьогодні';
    break;

  default:
    message = 'Менеджер вам передзвонить';
}

console.log(message);
