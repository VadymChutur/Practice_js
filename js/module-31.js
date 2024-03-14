const playlist = {
  name: 'Мій плейліст',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

console.log(playlist.name);
console.log(playlist['name']);
console.log(playlist);

const propertyName = 'tracks';
console.log(playlist[propertyName]);

const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
  username,
  email,
};
// signupData.username = username;
// signupData.email = email;

console.log(signupData);

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

const c = [1, 2];
const d = c;
d.push(3);
console.log(c === d);

const a = { x: 1, y: 2 };

const b = a;
b.c = 3;
b.x = 4;

console.log(a);
console.log(b);
console.log(a === b);
