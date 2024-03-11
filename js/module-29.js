const title = 'Top 10 benefits of React Framework';

// const normalizedTitle = title.toLowerCase().split(' ').join('-');

// console.log(normalizedTitle);

const slugifyIsString = function (string = title) {
  return string.toLowerCase().split(' ').join('-');
};

console.log(slugifyIsString());
console.log(slugifyIsString('Azure Static Web Apps are Awesome'));
console.log(
  slugifyIsString('Technical writing tips for non-native English speakers')
);
