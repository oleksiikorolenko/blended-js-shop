import"./assets/styles-Dw4sMSfm.js";import{a}from"./assets/vendor-CJ4cOYKs.js";const s={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products"),notFoundDiv:document.querySelector(".not-found"),modal:document.querySelector(".modal"),modalProduct:document.querySelector(".modal-product"),modalCloseBtn:document.querySelector(".modal__close-btn")};function p(){s.modal.classList.add("modal--is-open"),document.body.style.overflow="hidden"}function c(){s.modal.classList.remove("modal--is-open"),document.body.style.overflow=""}s.modal.addEventListener("click",t=>{t.target===s.modal&&c()});s.modalCloseBtn&&s.modalCloseBtn.addEventListener("click",c);a.defaults.baseURL="https://dummyjson.com";async function r(){return(await a.get("/products/category-list")).data}async function l(){const o=await a.get("/products?limit=12&skip=0");return console.log(o.data.products),o.data.products}async function i(t){const o=await a.get(`/products/category/${t}`);return console.log(o.data.products),o.data.products}async function d(t){const o=await a.get(`/products/${t}`);return console.log(o.data),o.data}d(3);function m(t){s.allCategories.innerHTML="";const o=t.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");s.allCategories.innerHTML=o}function n(t){if(t.length===0){s.notFoundDiv.classList.add("not-found--visible");return}s.notFoundDiv.classList.remove("not-found--visible"),s.allProducts.innerHTML="";const o=t.map(e=>`<li class="products__item" data-id="${e.id}">
    <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
    <p class="products__title">${e.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${e.brand}</span></p>
    <p class="products__category">Category:${e.category} </p>
    <p class="products__price">Price:${e.price} $</p>
 </li>`).join("");s.allProducts.innerHTML=o}function g(t){s.modalProduct.innerHTML=`<img class="modal-product__img" src="${t.thumbnail}" alt="${t.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${t.title}</p>
        <ul class="modal-product__tags">${t.tags?.map(o=>`<li class="modal-product__tag">#${o}</li>`).join("")||""}</ul>
        <p class="modal-product__description">${t.description}</p>
        <p class="modal-product__shipping-information">Shipping:${t.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy:${t.returnPolicy}</p>
        <p class="modal-product__price">Price:${t.price} $</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>`}r();async function _(){const o=["All",...await r()];m(o)}_();async function y(){const t=await l();n(t)}y();s.allCategories.addEventListener("click",async t=>{const o=t.target.closest(".categories__btn");if(o)if(o.textContent==="All"){const e=await l();n(e)}else{const e=await i(o.textContent);n(e)}});i();s.allProducts.addEventListener("click",async t=>{const o=t.target.closest("li[data-id]");if(!o)return;const e=o.dataset.id,u=await d(e);g(u),p()});
//# sourceMappingURL=index.js.map
