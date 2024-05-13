const magicBtn = document.querySelector('.js-magic-btn');

const imageEl = document.querySelector('.hero__image');
console.log(imageEl);
const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl);

magicBtn.addEventListener('click', () => {
  imageEl.src =
    'https://media.istockphoto.com/id/1461025494/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B8%D0%B1%D1%96%D1%80%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9-%D1%84%D0%BE%D0%BA%D1%83%D1%81-%D0%B7%D0%BD%D1%96%D0%BC%D0%BE%D0%BA-%D1%87%D0%B0%D1%80%D1%96%D0%B2%D0%BD%D0%BE%D1%97-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B8-%D0%B1%D1%96%D0%BB%D0%BE%D0%B3%D0%BE-%D1%96-%D0%BA%D0%BE%D1%80%D0%B8%D1%87%D0%BD%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B1%D1%83%D0%BB%D1%8C%D1%82%D0%B5%D1%80%D1%94%D1%80%D0%B0-%D0%B2-%D1%82%D1%80%D0%B0%D0%B2%D1%96.jpg?s=612x612&w=is&k=20&c=cQjRGTqg44b9aDoC6o1XjqZCzPRfN6RlrMNnB8QKdNY=';
  imageEl.alt = 'it`s new dog';
  heroTitleEl.textContent = 'Гарний хлопчик';
});

console.log(imageEl.getAttribute('src'));
console.log(imageEl.src);

const actionsRef = document.querySelectorAll('.js-actions button');
console.log(actionsRef);
console.log(actionsRef[0].dataset.action);
console.log(actionsRef[1].dataset.action);
console.log(actionsRef[2].dataset.action);
