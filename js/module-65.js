const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);
titleEl.innerHTML = '';
// titleEl.innerHTML = '<a href=" ">Це посилання</a>';
titleEl.insertAdjacentHTML('beforeend', '<a href=" ">Це посилання</a>');
