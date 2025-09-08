import { categoriesList } from "./refs";
import { getAllCategories } from "./products-api";

export function renderCategoriesList(categories) {
    categoriesList.innerHTML = '';
   const markup =  categories.map(category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`).join('');
    categoriesList.innerHTML = markup;
};

export async function renderCategories () {
    const categories = await getAllCategories();
    renderCategoriesList(categories);
};

