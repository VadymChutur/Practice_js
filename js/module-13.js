const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

console.log(friends);

const lastIndex = friends.length - 1;

console.log(lastIndex);

console.log(friends[2]);

// friends[0] = 'qweqwe';

console.log(friends[0]);

let a = 10;
let b = a;

console.log(a === b);

a = 20;

console.log(a === b);

const c = [1, 2, 3];
const d = c;

console.log(c === d);

c[0] = 4;

console.log(c === d);

for (let i = 0; i < friends.length; i += 1) {
  console.log(friends[i]);
}

for (const friend of friends) {
  console.log(friend);
}
