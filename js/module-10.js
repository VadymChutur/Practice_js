let balance = 10000;
const payment = 2000;

console.log(`Загальна сума платежу ${payment}`);

if (balance > payment) {
  balance -= payment;
  console.log(`Операція успішнаю. Баланс ${balance}`);
} else {
  console.log('НАрахунку недостатньо коштів');
}

console.log('Операція завершина.');
