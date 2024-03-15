const palylist = {
  name: 'Мій супер плейліст',
  raiting: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  author: 'Mango',
};

// const {
//   raiting,
//   name,
//   tracks,
//   trackCount: numberOfTracks = 0,
//   author = 'user',
// } = palylist;

// console.log(raiting);
// console.log(name);
// console.log(tracks);
// console.log(numberOfTracks);
// console.log(author);

// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitte/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers: myFollowers = 0 },
// } = profile;

// console.log(name, tag, location, avatar, myFollowers);

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

console.log('red: ', red, 'green: ', green, 'blue: ', blue);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

// const keys = Object.keys(authors);

// for (const key of keys) {
//   console.log(key);
//   console.log(authors[key]);
// }

// console.log(Math.max(...raitings));

const entries = Object.entries(authors);

console.log(entries);

for (const entriy of entries) {
  const [name, raiting] = entriy;
  console.log(name, raiting);
}

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitte/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile;

console.log(restProps);
