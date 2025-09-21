import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';
export async function getAllCategories() {
    const response = await axios.get('/products/category-list');
    return response.data;
};

export async function getAllProducts() {
  const currentPage = 1;
  const response = await axios.get(`/products?limit=12&skip=${(currentPage - 1) * 12}`);
  console.log(response.data.products);
  return response.data.products;
};


export async function productsByCategory(category) {
  const response = await axios.get(`/products/category/${category}`);
  console.log(response.data.products)
  return response.data.products;
}