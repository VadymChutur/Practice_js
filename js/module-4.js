const message = `В цій строці 24 символів`;
console.log(message.length);

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

const room = 716;

const type = 'VIP';

// const welcomeMsg =
//   'Гість ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' заселються ' +
//   type +
//   ' у номер ' +
//   room;

const welcomeMsg = `Гість ${firstName} ${lastName} заселються ${type} у номер ${room}`;
console.log(welcomeMsg);

const quantity = 5;
const orderMsg = `Ви замовляєте ${quantity ** 2} холодильників`;

console.log(orderMsg);

const brand = 'Samsung';
const normalizeBrand = brand.toLocaleLowerCase();
const inDb = 'samsung';

console.log(brand);
console.log(inDb === normalizeBrand);

const blacklistWord1 = 'спам';
const blacklistWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, ти виграв мільйон';
const string2 = 'Самий великий РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна компанія #fatlivesmatter';

const testString1_1 = string1.toLowerCase().includes(blacklistWord1);
const testString1_2 = string1.toLowerCase().includes(blacklistWord2);
const testString2_1 = string2.toLowerCase().includes(blacklistWord1);
const testString2_2 = string2.toLowerCase().includes(blacklistWord2);
const testString3_1 = string3.toLowerCase().includes(blacklistWord1);
const testString3_2 = string3.toLowerCase().includes(blacklistWord2);
console.log(testString1_1);
console.log(testString1_2);
console.log(testString2_1);
console.log(testString2_2);
console.log(testString3_1);
console.log(testString3_2);
