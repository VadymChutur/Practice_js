const magicBtn = document.querySelector('.js-magic-btn');
console.log(magicBtn);

const navEl = document.querySelector('.site-nav');
console.log(navEl);
// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');

magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('click-class');
});

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--curent');
