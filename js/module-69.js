const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange); //не юзаєтся для текста
// refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
  console.log('Інпут отримав фокус - подія focus');
}

function onInputBlur() {
  console.log('Інпут втратив фокус - подія blur');
}

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}
