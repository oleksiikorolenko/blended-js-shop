import"./assets/styles-Dw4sMSfm.js";import{a as o}from"./assets/vendor-CJ4cOYKs.js";o.defaults.baseURL="https://dummyjson.com";async function c(){return(await o.get("/products/category-list")).data}async function n(){const t=await o.get("/products?limit=12&skip=0");return console.log(t.data.products),t.data.products}async function i(s){const t=await o.get(`/products/category/${s}`);return console.log(t.data.products),t.data.products}const a={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products")};function l(s){a.allCategories.innerHTML="";const t=s.map(e=>`<li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>`).join("");a.allCategories.innerHTML=t}function r(s){a.allProducts.innerHTML="";const t=s.map(e=>`<li class="products__item" data-id="${e.id}">
    <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
    <p class="products__title">${e.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${e.brand}</span></p>
    <p class="products__category">Category:${e.category} </p>
    <p class="products__price">Price:${e.price} $</p>
 </li>`).join("");a.allProducts.innerHTML=t}c();async function u(){const t=["All",...await c()];l(t)}u();async function d(){const s=await n();r(s)}d();a.allCategories.addEventListener("click",async s=>{const t=s.target.closest(".categories__btn");if(t)if(t.textContent==="All"){const e=await n();r(e)}else{const e=await i(t.textContent);r(e)}});i();
//# sourceMappingURL=index.js.map
