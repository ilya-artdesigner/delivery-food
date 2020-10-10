'use strict';

const cart = document.querySelector('#cart');
const modal = document.querySelector('.modal-cart');

cart.addEventListener('click', () => {
  modal.classList.add('active');
});

modal.addEventListener('click', (event) => {
  const target = event.target;

  const closer = target.closest('.close');
  const cancel = target.closest('#cancel');

  if (closer || cancel) {
    modal.classList.remove('active');
  }

});