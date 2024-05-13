const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

Car.description = 'Клас який змальовує автомобіль';

Car.logInfo = function (carObj) {
  console.log('Car.logInfo -> carObj', carObj);
};

const car = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

class Car1 {
  static description = 'Клас який змальовує автомобіль';

  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }

  //   #test = 'test';

  //   myPublickPropertys = 'test publick';

  constructor({ brand, model, price } = {}) {
    console.log('Виконуєтся конструктор');
    this._brand = brand;
    this._model = model;
    this._price = price;
  }

  //   changePrice(newPrice) {
  //     this.price = newPrice;
  //   }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  //   updateModel(newModel) {
  //     this.model = newModel;
  //   }

  //   setModel(newModel) {
  //     this.model = newModel;
  //   }

  //   getModel() {
  //     return this.model;
  //   }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }

  //   updateBrand(newBrand) {
  //     this.brand = newBrand;
  //   }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }
}

const carReferens = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carReferens);
carReferens.model = 'Q4';
console.log(carReferens.model);
// console.log(Object.getPrototypeOf(carReferens) === Car1.prototype);
console.log(carReferens);

// carReferens.setModel('Q4');
// console.log(carReferens.getModel());

const obj = {
  _a: 100,
  get a() {
    return this._a;
  },
  set a(x) {
    this._a = x;
  },
};

console.log(obj);

// Object.defineProperty()
