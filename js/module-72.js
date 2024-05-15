const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropeClick);

function onOpenModal() {
  document.body.classList.add('show-modal');
  window.addEventListener('keydown', onEscKeyPress);
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
}

function onBackdropeClick(event) {
  // console.log(event.currentTarget);
  // console.log(event.target);
  // console.log('Клік по backdrope');
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';

  console.log(event);
  if (event.code === ESC_KEY_CODE) {
    onCloseModal();
  }
}
