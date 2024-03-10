const cards = [
  'Карточка - 1',
  'Карточка - 2',
  'Карточка - 3',
  'Карточка - 4',
  'Карточка - 5',
];
console.table(cards);

const cardToRemove = 'Карточка - 3';
const index = cards.indexOf(cardToRemove);
cards.splice(index, 1);

console.log(index);

const cardToInsert = 'Карточка - 6';
cards.splice(index, 0, cardToInsert);

const cardToUpdate = 'Карточка - 4';

cards.splice(1, 1, cardToUpdate);

console.table(cards);
