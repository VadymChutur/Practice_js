const numbers = [5, 10, 15, 20, 25];

// const newNumbers = numbers.forEach(
//   function (number, index, array) {
//     console.log('number: ', number);
//     console.log('index: ', index);
//     console.log('array: ', array);
//     console.log(this);
//   },
//   { a: 5, b: 10 }
// );

// console.log(newNumbers);

const doubledNums = numbers.map(function (number) {
  return number * 2;
});

console.log(doubledNums);
console.log(numbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerNames = players.map(({ name }) => {
  //   console.log(player);

  return name;
});

const playersIds = players.map(({ id }) => id);

const res = players.map(({ name, online }) => ({ name, online }));

const updatedPlayers = players.map((player) => ({
  ...player,
  points: Math.round(player.points * 1.1),
}));

console.log(playerNames);

console.log(playersIds);

console.log(res);

console.table(updatedPlayers);

const playerIdToUpdate = 'player-3';

// const updatedPlayerToId = players.map((player) => {
//   if (player.id === playerIdToUpdate) {
//     console.log('Це об`єкт для заміни');
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 150,
//     };
//   }

//   return player;
// });

const updatedPlayerToId = players.map((player) =>
  player.id === playerIdToUpdate
    ? {
        ...player,
        timePlayed: player.timePlayed + 150,
        points: Math.round(player.points * 1.3),
      }
    : player
);

console.table(updatedPlayerToId);

const obj = {
  a: 5,
  b: {
    c: 20,
    x: 20,
  },
};

console.log(obj);

const copy = {
  ...obj,
};

console.log(copy);

console.log(obj.b === copy.b);
