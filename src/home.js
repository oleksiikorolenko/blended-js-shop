
import { toggleNotFound } from "./js/handlers.js";
import { openModal } from "./js/modal.js";
import { getAllCategories, getAllProducts, productById, productsByCategory, searchProductsByName } from "./js/products-api";
import { refs } from "./js/refs";
import { renderCategoriesList, renderModalProduct, renderProductsList } from "./js/render-function.js";

getAllCategories();

export async function renderCategories () {
  const categories = await getAllCategories();
  const allCategories = ['All', ...categories];
    renderCategoriesList(allCategories);
};

renderCategories();

export async function renderProducts () {
  const products = await getAllProducts();
    renderProductsList(products);
};

renderProducts();

refs.allCategories.addEventListener('click', async(e) => {
  const clickedBtn = e.target.closest('.categories__btn');
  if (!clickedBtn) {
    return;
  }
  if (clickedBtn.textContent === 'All') {
     const products = await getAllProducts();
    renderProductsList(products);
  }else{const productByCategory = await productsByCategory(clickedBtn.textContent);
  renderProductsList(productByCategory);}

});

productsByCategory();

refs.allProducts.addEventListener('click', async e => {
  const li = e.target.closest('li[data-id]');
  if (!li) return;

  const productId = li.dataset.id;

  const product = await productById(productId);
  renderModalProduct(product);
  openModal();

});

refs.searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = refs.input.value.trim();

  if (!query) return;

  try {
    const products = await searchProductsByName(query);
     refs.allProducts.innerHTML = '';
    renderProductsList(products.slice(0, 12));
    toggleNotFound(products.length === 0);
  } catch (error) {
    console.error(error);
  }
});

refs.clearBtn.addEventListener('click', async () => {
  refs.input.value = '';
  refs.clearBtn.classList.remove('visible');

  try {
    const products = await getAllProducts();
    renderProductsList(products);
    toggleNotFound(false);
  } catch (error) {
    console.error(error);
  }
});

refs.input.addEventListener('input', () => {
  const hasValue = refs.input.value.trim().length > 0;
  refs.clearBtn.classList.toggle('visible', hasValue);
})

