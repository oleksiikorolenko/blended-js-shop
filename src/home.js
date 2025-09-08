//Логіка сторінки Home
import { getAllCategories } from "./js/products-api";
import { renderCategories } from "./js/render-function";

getAllCategories();

renderCategories();