const numbers = [1, 9, 6, 2, 3];
console.log('numbers: ', numbers);
// numbers.sort();
// console.log('numbers: ', numbers);

const letters = ['b', 'B', 'a', 'A'];
console.log(letters);
// letters.sort();
// console.log(letters);

// numbers.sort((curEl, nextEl) => {
//   return nextEl - curEl;
// });

const newNumbers = [...numbers].sort((a, b) => a - b);

console.log('old numbers: ', numbers);
console.log('new numbers: ', newNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);
console.log(sortedByBestPlayers);

const sortedByOnline = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.online - prevPlayer.online
);
console.log(sortedByOnline);

// const sortByNamePlayers = [...players].sort(
//   (a, b) => a.name[0] > b.name[0]?1:-1
// );

const sortByNamePlayers = [...players].sort(
  (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0)
);
console.table(sortByNamePlayers);
