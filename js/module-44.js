const numbers = [5, 10, 15, 20, 25];

const filteredNubers = numbers.filter((number) => number > 15 && number < 25);

console.log(filteredNubers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const filteredPlayersIsOnline = players.filter((player) => player.online);

console.table(filteredPlayersIsOnline);

const filteredPlayerIsOffline = players.filter((player) => !player.online);

console.table(filteredPlayerIsOffline);

const hardcorePlayers = players.filter((player) => player.timePlayed > 250);

console.log(hardcorePlayers);
