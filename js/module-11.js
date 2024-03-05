let totalSpent = 2000;
let payment = 500;
let discount = 0;
const goldUser = 5000;
const silverUser = 1000;
const bronzeUser = 100;

if (totalSpent >= goldUser) {
  discount = 0.1;
  console.log(`Золотий партнер. Розмір знижки: ${discount * 100}%`);
} else if (totalSpent < goldUser && totalSpent >= silverUser) {
  discount = 0.05;
  console.log(`Срібний партнерю Розмір знижки: ${discount * 100}%`);
} else if (totalSpent < silverUser && totalSpent >= bronzeUser) {
  discount = 0.02;
  console.log(`Бронзовий партнерю Розмір знижки: ${discount * 100}%`);
} else {
  console.log('Ви ще не стали участником партнерської програми');
}

payment -= payment * discount;

console.log(
  `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
);

totalSpent += payment;
console.log(`Загальна сума витраченого ${totalSpent}`);
