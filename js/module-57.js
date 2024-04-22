// class Warior {
//   constructor() {
//     this._name = '';
//     this._xp = '';
//     this._weapon = '';
//   }

//   gainXp() {
//     //
//   }
// }

// class Mage {
//   constructor() {
//     this._name = '';
//     this._xp = '';
//     this._spels = '';
//   }

//   gainXp() {
//     //
//   }
// }

class Hero {
  constructor({ name = 'Hero', xp = 0 } = {}) {
    this._name = name;
    this._xp = xp;
  }

  gainXp(amount) {
    console.log(`${this._name} отримує ${amount} досвіда.`);
    this._xp += amount;
  }
}

// const mango = new Hero({ name: 'Mango', xp: 1000 });

class Warrior extends Hero {
  constructor({ name, xp, weapon = 'Sword' } = {}) {
    super({ name, xp });
    console.log(name, xp, weapon);

    this._weapon = weapon;
  }
}

class BatleMage extends Warrior {
  constructor({ name, spelss }) {
    super({ name });

    this._spels = spelss;
  }
}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'Axe' });
const kiwi = new BatleMage({ name: 'Kiwi', spelss: 'fireball' });

console.log(mango);
mango.gainXp(1000);
console.log(mango);

console.log(kiwi);
kiwi.gainXp(3000);
console.log(kiwi);
