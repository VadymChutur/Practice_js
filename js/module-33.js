const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// const keys = Object.keys(feedback);
// console.log(keys);

let totalFeedback = 0;

// for (const key of keys) {
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

const values = Object.values(feedback);

for (const value of values) {
  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);
