const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3mn4'];
// const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайден.`;

// message = logins.includes(loginToFind)
//   ? `Користувач ${loginToFind} знайдено`
//   : message;

const findLoginInAllLogins = function (allLogins, loginToFind) {
  console.log(allLogins);
  return allLogins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдено.`
    : `Користувач ${loginToFind} не знайдено.`;
};

console.log(findLoginInAllLogins(logins, 'avocod3r'));
console.log(findLoginInAllLogins(logins, 'k1widab3st'));
console.log(findLoginInAllLogins(logins, 'jam4l'));
console.log(findLoginInAllLogins(logins, 'poly1scute'));
