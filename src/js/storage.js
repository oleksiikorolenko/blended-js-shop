// export function getCart() {
//   return JSON.parse(localStorage.getItem('cart')) || [];
// };

// export function saveCart(cart) {
//   localStorage.setItem('cart', JSON.stringify(cart));
// };

// export function isInCart(productId) {
//   const cart = getCart();
//   return cart.includes(productId);
// };

// export function addToCart(productId) {
//   const cart = getCart();
//   if (!cart.includes(productId)) {
//     cart.push(productId);
//     saveCart(cart);
//   }
// };

// export function removeFromcart(productId) {
//   const cart = getCart().filter(id => id !== productId);
//   saveCart(cart);
// }

export function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export function addToCart(id) {
  const cart = getCart();
  if (!cart.includes(id)) {
    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

export function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(item => item !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
}
