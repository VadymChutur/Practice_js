// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find((number) => number > 15);
// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerIdToFind = 'player-3';

const playerWithId = players.find((player) => player.id === playerIdToFind);

console.log(playerWithId);

const playerNameToFind = 'Poly';

const playerWithNme = players.find(({ name }) => name === playerNameToFind);

console.log(playerWithNme);

const findPlayerById = (allPlayers, playerId) =>
  allPlayers.find(({ id }) => id === playerId);

console.log(findPlayerById(players, 'player-1'));
console.log(findPlayerById(players, 'player-3'));
console.log(findPlayerById(players, 'player-5'));
