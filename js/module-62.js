const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки.';
console.log(titleEl);

const imageEl = document.createElement('img');
imageEl.src =
  'https://media.istockphoto.com/id/872089570/photo/smiling-bullterrier-puppy-dog-portrait-on-a-green-grass-on-a-sunny-day.jpg?b=1&s=612x612&w=0&k=20&c=HdtVPaT0M9XB7UP2Cl0b5M_y3ZaXckR6JRTForxurAk=';
imageEl.alt = 'Good boy :)';
imageEl.width = 320;
console.log(imageEl);
const heroEl = document.querySelector('.hero');
heroEl.append(titleEl, imageEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
