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
  //   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitte/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile;

console.log(restProps);

const showProfileInfo = function ({ name, tag, location, avatar, stats }) {
  //   const { name, tag, location, avatar, stats } = userProfile;
  //   console.log(userProfile);
  console.log(name, tag, location, avatar, stats);
};

showProfileInfo(profile);

const makeProfileMarkup = function ({
  avatar = 'https://i.pravatar.cc/400?img=6',
  name,
  tag,
  location = 'PlanetEarth',
  stats: { followers, views, likes },
}) {
  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
        <ul>
            <li>Followers: ${followers}</li>
            <li>Views: ${views}</li>
            <li>Likes: ${likes}</li>
        </ul>
    </div>`;
};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML('afterbegin', markup);
