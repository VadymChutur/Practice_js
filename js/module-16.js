const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3mn4'];
const loginToFind = 'poly1scute';
let message = `Користувач ${loginToFind} не знайден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   console.log(login);

//   if (login === loginToFind) {
//     message = `Користувач ${login} знайдено`;
//     break;
//   }

//   message = `Користувач ${login} не знайден.`;

//   //   if (login !== loginToFind) {
//   //     message = `Користувач ${login} не знайден.`;
//   //   } else {
//   //     message = `Користувач ${login} знайдено`;
//   //   }
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${login} знайдено`;
//     break;
//   }
//   //   message = `Користувач ${login} не знайден.`;
// }

message = logins.includes(loginToFind)
  ? `Користувач ${loginToFind} знайдено`
  : message;

console.log(message);
