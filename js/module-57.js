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
  constructor({ weapon = 'Sword', ...restProps } = {}) {
    super(restProps);
    console.log(restProps);

    this._weapon = weapon;
  }

  attack() {
    console.log(`${this._name} атакує зброєю ${this._weapon}`);
  }
}

class BatleMage extends Warrior {
  constructor({ spells = 'Wind Blade', ...restProps } = {}) {
    super(restProps);

    this._spells = spells;
  }

  cast() {
    console.log(`${this._name} кастує ${this._spells}`);
  }
}

const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'Axe' });
const kiwi = new BatleMage({ name: 'Kiwi', spells: 'Fireball' });

console.log(mango);
mango.attack();
mango.gainXp(1000);
console.log(mango);

console.log(kiwi);
kiwi.attack();
kiwi.cast();
kiwi.gainXp(3000);
console.log(kiwi);
