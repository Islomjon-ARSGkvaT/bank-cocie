'use strict';

// Modal window \\

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnModal => {
  btnModal.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Add cookies

const cookie = document.createElement('div');
cookie.classList.add('cookie-message');
cookie.innerHTML = `We use cookied for improved functionality and analytics
<button class='btn btn--close-cookie'>Got it!</button>`;

body.prepend(cookie);

cookie.style.background = '#000';

cookie.style.height = getComputedStyle(cookie).height + '30px';

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => cookie.remove());