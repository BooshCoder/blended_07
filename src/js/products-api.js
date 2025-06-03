// Функції для роботи з бекендом
import axios from "axios";

axios.defaults.baseURL = 'https://dummyjson.com';

export async function fetchCategories() {
    const response = await axios.get('/products/category-list');
    console.log(response.data);
    return response.data;
}
export async function fetchProducts() {
    const currentPage = 1;
    const url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;
    const response = await axios.get(url);
    console.log(response.data.products);
    return response.data.products;
   
}

export async function fetchProductsByCategory(category) {
    const response = await axios.get(`/products/category/${category}`);
    console.log(response.data.products);
    return response.data.products;
  }