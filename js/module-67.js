// handleSubjectClick > handleEvent
// subjectEventHandler > eventHandler
// onSubjectEvent > onEvent || onSubjectEvent

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListnerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetBtnClick);

// function handleTargetBtnClick() {
//   console.log('Клік');
// }

// function targetBtnClickHandler() {
//   console.log('Клік');
// }

// function onTargetBtnClick() {
//   console.log('Клік');
// }

function logMessage() {
  console.log('Клік по лівій клавіші миші');
}

addListenerBtn.addEventListener('click', () => {
  console.log('Вішаю слухача подій на цільову кнопку.');

  targetBtn.addEventListener('click', onTargetBtnclick);
});

removeListnerBtn.addEventListener('click', () => {
  console.log('Знімаємо слухача подій з цільової кнопки');

  targetBtn.removeEventListener('click', onTargetBtnclick);
});

function onTargetBtnclick() {
  console.log('Клік по цільовій кнопці.');
}
