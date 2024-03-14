const palylist = {
  name: 'Мій супер плейліст',
  raiting: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
  author: 'Mango',
};

const {
  raiting,
  name,
  tracks,
  trackCount: numberOfTracks = 0,
  author = 'user',
} = palylist;

console.log(raiting);
console.log(name);
console.log(tracks);
console.log(numberOfTracks);
console.log(author);

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
