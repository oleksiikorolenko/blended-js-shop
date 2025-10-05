import { refs } from "./refs";

export function renderCategoriesList(categories) {
    refs.allCategories.innerHTML = '';
   const markup =  categories.map(category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`).join('');
    refs.allCategories.innerHTML = markup;
};



export function renderProductsList(products) {
  if (products.length === 0) {
    refs.notFoundDiv.classList.add('not-found--visible');
     return;
  }
refs.notFoundDiv.classList.remove('not-found--visible');

  refs.allProducts.innerHTML = '';
  const markup = products.map(product => `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.thumbnail}" alt="${product.title}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${product.brand}</span></p>
    <p class="products__category">Category:${product.category} </p>
    <p class="products__price">Price:${product.price} $</p>
 </li>`).join('');

  refs.allProducts.innerHTML = markup;

};


export function renderModalProduct(product) {
refs.modalProduct.innerHTML = `<img class="modal-product__img" src="${product.thumbnail}" alt="${product.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${product.title}</p>
        <ul class="modal-product__tags">${product.tags?.map(tag => `<li class="modal-product__tag">#${tag}</li>`).join('') || ''}</ul>
        <p class="modal-product__description">${product.description}</p>
        <p class="modal-product__shipping-information">Shipping:${product.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${product.returnPolicy}</p>
        <p class="modal-product__price">Price:${product.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`
};


