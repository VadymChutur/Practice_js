// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [...[1, 2, 3], 4, 5, ...[6, 7, 8]];
// console.log(numbers);

const temps = [18, 14, 12, 21, 17, 29, 24];

console.log(Math.max(...temps));
console.log(Math.min(...temps));

// const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
// const b = [...a];

// console.log(a[0] === b[0]);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

console.log(allTemps);

const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };
// const c = Object.assign(a, b);

const c = { ...a, x: 100, ...b, z: 50 };

console.log(c);

const defaulSetings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSetings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSetings = {
  ...defaulSetings,
  ...userSetings,
};

console.log(defaulSetings);

console.log(finalSetings);
