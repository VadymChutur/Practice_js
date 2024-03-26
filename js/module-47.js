const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, value) => {
//   console.log('acc: ', acc);
//   console.log('value: ', value);

//   return acc + value;
// }, 0);

// const total = numbers.reduce((acc, value) => acc + value, 0);

// const total = numbers.reduce((acc, value) => acc + value);

// console.log(total);

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0
);

console.log(totalSalary);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);

console.log(totalTimePlayed);

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + quantity * price,
  0
);

console.log(totalAmount);

const tweets = [
  { id: '001', likes: 5, tags: ['js', 'nodejs'] },
  { id: '002', likes: 2, tags: ['html', 'css'] },
  { id: '003', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '004', likes: 8, tags: ['css', 'react'] },
  { id: '005', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((tags, tweet) => {
//   //   allTags.push(...tweet.tags).length;

//   return [...tags, ...tweet.tags];
// }, []);

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   //   console.log(tag);
//   //   console.log(acc[tag]);
//   console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   //   console.log(tag);
//   //   console.log(acc[tag]);
//   console.log(acc);
//   if (acc[tag]) {
//     return {
//       ...acc,
//       [tag]: acc.tag + 1,
//     };
//   }

//   return {
//     ...acc,
//     [tag]: 1,
//   };

//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc.tag + 1 : 1,
//   };
// }, {});

const tagsStats = allTags.reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  }),
  {}
);

console.log(tagsStats);
