// const add = function (a, b) {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const add = (...args) => console.log(Number(args.join('')));

// console.log(add(2, 3));

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// const showThis = function () {
//   console.log(this);
//   return this;
// };

// showThis();

// const user = { name: 'Mango' };

// user.showContext = showThis;
// user.showContext();

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);

//     const inner = () => {
//       console.log('this is inner: ', this);
//     };

//     inner();
//   },
// };

// const user = {
//   fullName: 'Mango',
//   showName() {
//     console.log('this: ', this);
//     console.log('this.fullName: ', this.fullName);
//   },
// };

// user.showName();

// const User = function (name) {
//   this.name = name;
// };

// const User = (name) => {
//   this.name = name;
// };

// console.log(new User('Mango'));

const onjA = {
  x: 5,
  showX() {
    console.log(this.x);

    const objB = {
      y: 10,
      showTHis: () => {
        console.log('this in objB.showThis: ', this);
      },
    };

    objB.showTHis();
  },
};

onjA.showX();
