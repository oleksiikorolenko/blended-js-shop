import { refs } from "./refs.js";
import { addToCart, removeFromCart, getCart } from "./storage.js";
import { updateCartCount } from "./helpers.js";

export function openModal() {
  refs.modal.classList.add('modal--is-open');
  document.body.style.overflow = 'hidden';
};

export function closeModal() {
  refs.modal.classList.remove('modal--is-open');
document.body.style.overflow = '';

};

refs.modal.addEventListener('click', e => {
  if (e.target === refs.modal) closeModal();
});

if (refs.modalCloseBtn) {
  refs.modalCloseBtn.addEventListener('click', closeModal);
}

// export function openProductModal(product) {
//   const btn = refs.modalCloseBtn;
//   const inCart = isInCart(product.id.toString());
//   btn.textContent = inCart ? 'Remove from Cart' : 'Add to cart';


//   btn.addEventListener('click', () => {
//     const isNowInCart = isInCart(product.id.toString());

//     if (isNowInCart) {
//       removeFromcart(product.id.toString());
//       btn.textContent = 'Add to cart';
//     } else {
//       addToCart(product.id.toString());
//       btn.textContent = 'Remove from Cart';
//     }
//   });

//   updateCartCount();
// };

export function openProductModal(product) {
  const cartBtn = document.querySelector('.modal-product__btn--cart');
  if (!cartBtn) return;

  const id = String(product.id);
  const cart = getCart();

  const inCart = cart.includes(id);
  cartBtn.textContent = inCart ? 'Remove from Cart' : 'Add to Cart';


  cartBtn.onclick = () => {
    const cart = getCart();
    const inCart = cart.includes(id);

    if (inCart) {
      removeFromCart(id);
      cartBtn.textContent = 'Add to Cart';
    } else {
      addToCart(id);
      cartBtn.textContent = 'Remove from Cart';
    }
    updateCartCount();
  };

}