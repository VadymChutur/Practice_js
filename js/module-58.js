const magicBtn = document.querySelector('.js-magic-btn');

console.log(window);
console.log(document);

magicBtn.addEventListener('click', () => {
  const navRef = document.querySelector('.site-nav');
  console.log(navRef);
  const navLinksRef = navRef.querySelectorAll('.site-nav__link');
  console.log(navLinksRef);
});
