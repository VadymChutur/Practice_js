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

  constructor({ brand, model, price } = {}) {
    console.log('Виконуєтся конструктор');
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this.model = newModel;
  }

  updateBrand(newBrand) {
    this.brand = newBrand;
  }
}

const carReferens = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});

console.log(carReferens);
console.log(Object.getPrototypeOf(carReferens) === Car1.prototype);
