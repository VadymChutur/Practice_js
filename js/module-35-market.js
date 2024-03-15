// const x = {
//   a: 1,
//   b: 2,
//   c: 50,
//   d: 100,
// };

// console.log(Object.keys(x).length);

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const { items } = this;

    for (const item of items) {
      if (item.name === product.name) {
        console.log('Цей продукт вже є');
        item.quantity += 1;
        return;
      }
    }

    const newProdact = {
      ...product,
      quantity: 1,
    };

    items.push(newProdact);
    // for (const item of this.items) {
    //   item.quantity = 1;
    //   if (item.quantity) {
    //     item.quantity += 1;
    //   }
    // }
  },
  remove(product) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];

      if (product === name) {
        // console.log(items[i]);
        // console.log(i);
        // console.log(name);
        return items.splice(i, 1);
      }
    }

    // for (const item of this.items) {
    //   if (product === item.name) {
    //     console.log(item);
    //     this.items.splice()
    //   }
    // }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      // console.log(price);
      total += price * quantity;
    }

    return total;
  },

  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });

console.table(cart.getItems());

cart.remove('apple');

console.table(cart.getItems());

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });

console.table(cart.getItems());

// cart.clear();

console.log(cart.countTotalPrice());

console.table(cart.getItems());
