const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#60708B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerRef = document.querySelector('.js-color-picker');

// const options = colorPickerOptions[0];

// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = options.label;
// buttonEl.style.backgroundColor = options.color;

const colorPicker = colorPickerOptions.map((el, index, arr) => {
  console.log(el);
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.textContent = el.label;
  buttonEl.style.backgroundColor = el.color;
  buttonEl.style.width = '100px';
  buttonEl.style.height = '100px';

  return buttonEl;
});

console.log(colorPicker);

colorPickerRef.append(...colorPicker);
