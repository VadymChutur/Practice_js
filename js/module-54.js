const objC = {
  z: 5,
};

console.log(objC);

const objB = Object.create(objC);
objB.y = 2;

const objA = Object.create(objB);
objA.x = 1;

console.log(objB);

console.log(objB.z);

console.log(objA);

const Car = function (
  { brand, model, price } = { brand: 'Toyota', model: 'Trueno', price: 5000 }
) {
  console.log('proto Car');
  console.log('this -> ', this);
  // const { brand, model, price } = config;
  this.brand = brand;
  this.model = model;
  this.price = price;

  // this.changePrice = function (newPrice) {
  //   this.price = newPrice;
  // };
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.prototype.changeModel = function (newModel) {
  this.model = newModel;
};

Car.prototype.changeBrand = function (newBrand) {
  this.brand = newBrand;
};

console.log(Car.prototype);

const myCar1 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
const myCar3 = new Car();

myCar1.changePrice(60000);

console.log(myCar1);
console.log(myCar2);
console.log(myCar3);

const User = function (
  { email, password } = {
    email: 'emaol@email.com',
    password: 'password',
  }
) {
  this.email = email;
  this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};

User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

const mango = new User({ email: 'mango@email.com', password: 1111111 });

mango.changeEmail('my@email.com');
mango.changePassword('QWERTY123456');

console.log(mango);
