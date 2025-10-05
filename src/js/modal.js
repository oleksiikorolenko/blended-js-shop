import { refs } from "./refs.js";

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