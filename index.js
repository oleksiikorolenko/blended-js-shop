import"./assets/styles-Dw4sMSfm.js";import{a as o}from"./assets/vendor-CJ4cOYKs.js";o.defaults.baseURL="https://dummyjson.com";async function s(){const t=await o.get("/products/category-list");return console.log(t),t.data}const e=document.querySelector(".categories");function i(t){e.innerHTML="";const n=t.map(a=>`<li class="categories__item">
   <button class="categories__btn" type="button">${a}</button>
 </li>`).join("");e.innerHTML=n}async function r(){const t=await s();i(t)}s();r();
//# sourceMappingURL=index.js.map
