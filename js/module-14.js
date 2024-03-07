const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }

for (const number of cart) {
  total += number;
}

// for (let i = 0; i < cart.length; i += 1) {
//   let value;
//   value = cart[i] *= 1.2;
//   //   console.log(cart[i]);
//   total += value;
// }

console.log('total: ', total);
