const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(function (num) {
  return num > 2;
});

console.log(greaterThenTwo);

const multByThree = greaterThenTwo.map(function (num) {
  return num * 3;
});

console.log(multByThree);

const sorted = multByThree.sort(function (a, b) {
  return a - b;
});

console.log(sorted);

const chainingResult = [...numbers]
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(chainingResult);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const onlineAndSorted = players
  .filter((player) => player.online)
  .sort((a, b) => b.points - a.points);

console.table(onlineAndSorted);

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;

    return this;
  },
};

element.toggleHovered().changeClass('open');
console.log(element);
