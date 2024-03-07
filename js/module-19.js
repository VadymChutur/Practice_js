const string = 'JavaScript';

// 1 створити змінну
// 2 перевести строку в масив
// 3 перебрати строку
// 4 зробити перевірку регістра

const letters = string.split('');
console.log(letters);

let invertedString = '';

for (const letter of letters) {
  console.log(letter);

  //   if (letter === letter.toLowerCase()) {
  //     console.log('Ця літера в нижньому регістрі: ', letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     console.log('Ця літера у верхньому регістрі: ', letter);
  //     invertedString += letter.toLowerCase();
  //   }

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}

console.log(invertedString);
