'use strict';

const modalSection = document.querySelector('.modal-cart');
const cart = document.querySelector('#cart');

const cartModal = () => {
  modalSection.textContent = '';

  modalSection.insertAdjacentHTML('beforeend', `
    <div class="modal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Корзина</h5>
            <button type="button" class="close">&times;</button>
          </div>
          <div class="modal-body">
            <section class="d-flex justify-content-between align-items-center good-item">
              <span class="item-name">Ролл угорь стандарт</span>
              <span class="item-price">250 ₽</span>
              <div class="d-flex justify-content-between align-items-center counter">
                <button class="btn btn-outline-primary">&#8722;</button>
                <span class="item-number">1</span>
                <button class="btn btn-outline-primary">&#43;</button>
              </div>
            </section>
            <section class="d-flex justify-content-between align-items-center good-item">
              <span class="item-name">Ролл угорь стандарт</span>
              <span class="item-price">250 ₽</span>
              <div class="d-flex justify-content-between align-items-center counter">
                <button class="btn btn-outline-primary">&#8722;</button>
                <span class="item-number">1</span>
                <button class="btn btn-outline-primary">&#43;</button>
              </div>
            </section>
            <section class="d-flex justify-content-between align-items-center good-item">
              <span class="item-name">Ролл угорь стандарт</span>
              <span class="item-price">250 ₽</span>
              <div class="d-flex justify-content-between align-items-center counter">
                <button class="btn btn-outline-primary">&#8722;</button>
                <span class="item-number">1</span>
                <button class="btn btn-outline-primary">&#43;</button>
              </div>
            </section>
            <section class="d-flex justify-content-between align-items-center good-item">
              <span class="item-name">Ролл угорь стандарт</span>
              <span class="item-price">250 ₽</span>
              <div class="d-flex justify-content-between align-items-center counter">
                <button class="btn btn-outline-primary">&#8722;</button>
                <span class="item-number">1</span>
                <button class="btn btn-outline-primary">&#43;</button>
              </div>
            </section>
            <section class="d-flex justify-content-between align-items-center good-item">
              <span class="item-name">Ролл угорь стандарт</span>
              <span class="item-price">250 ₽</span>
              <div class="d-flex justify-content-between align-items-center counter">
                <button class="btn btn-outline-primary">&#8722;</button>
                <span class="item-number">1</span>
                <button class="btn btn-outline-primary">&#43;</button>
              </div>
            </section>
          </div>
          <div class="modal-footer d-flex justify-content-between align-items">
            <span class="time-box d-flex justify-content-center align-items-center cart-sum"><span class="sum">1255 ₽</span></span>
            <section class="d-flex justify-content-between buttons">
              <button class="btn btn-primary">Оформить заказ</button>
              <button class="btn btn-outline-secondary" id="cancel">Отмена</button>
            </section>
          </div>
        </div>
      </div>
    </div>
`);
};


cart.addEventListener('click', () => {
  
  if (cart) {
      cartModal();
  }

});

modalSection.addEventListener('click', (event) => {
  const target = event.target;

  const closer = target.closest('.close');
  const cancel = target.closest('#cancel');

  if (closer || cancel) {
    modalSection.textContent = '';
  }
  
});