import { refs } from "./refs.js";
import { getCart } from "./storage.js";

export function updateCartCount() {
  const countEl = refs.cartCount;
  const cart = getCart();
  countEl.textContent = cart.length;
}