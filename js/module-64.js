import products from './products.js';
console.log(products);

const productsContainerEl = document.querySelector('.js-products');
console.log(productsContainerEl);

// const product = {
//   name: 'Сервоприводи',
//   description:
//     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, veritatis explicabo quas nihil corporis quaerat accusamus quo vel laboriosam tempore quam minus eaque amet neque quae assumenda ut recusandae itaque.',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

/*<article class="product">
      <h2 class="product__name">Назва</h2>
      <p class="product__descr">Опис</p>
      <p class="product__pridct">Ціна</p>
    </article>; */

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Ціна ${product.price} кредитів`;
// priceEl.classList.add('product__price');

// productEl.append(nameEl, descrEl, priceEl);

// console.log(productEl);

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Ціна ${price} кредитів`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);
console.log(elements);

productsContainerEl.append(...elements);
