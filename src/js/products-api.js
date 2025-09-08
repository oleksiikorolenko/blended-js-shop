import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

export async function getAllCategories() {
    const response = await axios.get('/products/category-list');
    console.log(response);
    return response.data;
}