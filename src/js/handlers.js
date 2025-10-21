import { refs } from "./refs.js";

export function toggleNotFound(isVisible) {
  refs.notFoundDiv.classList.toggle('.not-found--visible', isVisible)
};