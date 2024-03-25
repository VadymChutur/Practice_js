const numbers = [1, 5, 3, 4, 3];

// const greaterThenTwo = numbers.filter(function (num) {
//   return num > 2;
// });

const greaterThenTwo = numbers.filter((num) => num > 2);

console.log(greaterThenTwo);

// const multiByTwo = greaterThenTwo.map(function (num) {
//   return num * 3;
// });

const multiByTwo = greaterThenTwo.map((num) => num * 3);

console.log(multiByTwo);

// const sorted = multiByTwo.sort(function (a, b) {
//   return a - b;
// });

const sorted = multiByTwo.sort((a, b) => a - b);

console.log(sorted);

// const res = numbers
//   .filter(function (num) {
//     return num > 2;
//   })
//   .map(function (num) {
//     return num * 3;
//   })
//   .sort(function (a, b) {
//     return a - b;
//   });

const res = numbers
  .filter((num) => num > 2)
  .map((num) => num * 3)
  .sort((a, b) => a - b);

console.log(res);

// const players = [
//   { id: 1, tag: 'Mango', isOnline: true, rank: 800 },
//   { id: 2, tag: 'Poly', isOnline: false, rank: 600 },
//   { id: 3, tag: 'Ajax', isOnline: true, rank: 100 },
//   { id: 4, tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// const onlineAndSorted = players
//   .filter(function (player) {
//     return player.isOnline;
//   })
//   .sort(function (prevPlayer, nextPlayer) {
//     return prevPlayer.rank - nextPlayer.rank;
//   });

// const onlineAndSorted = players
// .filter((player) => player.isOnline)
// .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);
const players = [
  { id: 'player-1', name: 'Mango', online: false, points: 54, timePLayed: 310 },
  { id: 'player-2', name: 'Poly', online: true, points: 92, timePLayed: 470 },
  { id: 'player-3', name: 'Kiwi', online: true, points: 48, timePLayed: 230 },
  { id: 'player-4', name: 'Ajax', online: false, points: 71, timePLayed: 150 },
  { id: 'player-5', name: 'Chelsy', online: true, points: 48, timePLayed: 80 },
];

// const updatedPlayers = players.map((player) => ({
//   ...player,
//   points: player.points + player.points * 0.1,
// }));

// console.table(updatedPlayers);

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map((player) =>
  player.id === playerIdToUpdate
    ? {
        ...player,
        timePLayed: player.timePLayed + 50,
      }
    : player
);

console.table(updatedPlayers);
console.table(players);

const countSheep = (n) =>
  [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;

console.log(countSheep(5));

const count = function (num) {
  return [...Array(num).keys()].map((x) => `${x + 1} sheep...`).join('');
};

console.log(count(5));

console.log([...Array(2).keys()]);
