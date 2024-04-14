console.log(_.isEmpty({}));

// const user = {
//   name: 'mango',
//   //   location: {
//   //     coords: [1, 2],
//   // city: 'Kyev',
//   //   },
// };

// console.log(_.get(user, 'location.city'));
// console.log(user?.location?.city);

// if (user && user.location) {
//   console.log(user.location.city);
// }

// user?.location?.city;

console.log(_.union([1, 2, 3], [3, 4, 5]));

console.log(_.range(6));

const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 },
];

console.log(_.sortBy(users, (user) => user.age));
console.log(_.sortBy(users, ['user', 'age']));

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

console.log(_.sumBy(players, (player) => player.timePlayed));
console.log(_.minBy(players, (player) => player.timePlayed));

// const isIsogram = (str) => {
//   const res = str.split('');

//   const resFilter = res.filter((el, index, array) => {
//     console.log('el: ', el);
//     console.log('index: ', index);
//     console.log('array: ', array);

//     console.log(array.indexOf(el) === index);
//     return array.indexOf(el) === index;
//   }).length;

//   console.log(str.length);
//   return resFilter === str.length;
// };

const isIsogram = (str) =>
  str
    .toLowerCase()
    .split('')
    .every((letter, i, arr) => arr.indexOf(letter) === i);

console.log(isIsogram('thomas'));
console.log(isIsogram('moses'));
console.log(isIsogram(''));

var XO = (s) =>
  ![...s].reduce(
    (t, v) => t + ((v = (v.charCodeAt() - 24) % 32) ? (v - 23 ? 0 : -1) : 1),
    0
  );

function XO(str) {
  return (
    str
      .split('')
      .reduce(
        (acc, cur) =>
          /o/i.test(cur) ? acc + 1 : /x/i.test(cur) ? acc - 1 : acc,
        0
      ) === 0
  );
}
