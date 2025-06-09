import { fetchCategories } from "./js/products-api"
import { markupCategories } from "./js/render-function"
import { fetchProducts } from "./js/products-api";
import { markupProducts } from "./js/render-function";
import { fetchProductsByCategory } from "./js/products-api";
import { refs } from "./js/refs"



async function renderCategories() {
    const categories = await fetchCategories();
    const allCategories = ["All", ...categories];
    markupCategories(allCategories);
}

renderCategories();


async function renderInitialProducts() {
    const products = await fetchProducts();
    markupProducts(products);
}

renderInitialProducts();

refs.allCategories.addEventListener("click", handleCategoryClick);

async function handleCategoryClick(event) {
    const btn = event.target.closest(".categories__btn");
    if (!btn) return;
    const category = btn.textContent.trim();
  
    // Знімаємо стару активну кнопку
    const activeBtn = refs.allCategories.querySelector(".categories__btn--active");
    if (activeBtn) activeBtn.classList.remove("categories__btn--active");
  
    // Робимо нову кнопку активною
    btn.classList.add("categories__btn--active");
  
    // Запит продуктів
    let products = [];
    try {
      if (category === "All") {
        products = await fetchProducts();
      } else {
        products = await fetchProductsByCategory(category);
      }
  
      if (!products.length) {
        refs.notFound.classList.add("not-found--visible");
        refs.allProducts.innerHTML = "";
      } else {
        refs.notFound.classList.remove("not-found--visible");
        markupProducts(products);
      }
    } catch (err) {
      console.error("😿 Не вдалося отримати продукти:", err);
    }
  }