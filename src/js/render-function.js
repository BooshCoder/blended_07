import { refs } from "./refs";
export function markupCategories(categories) {
    refs.allCategories.innerHTML = '';
    const markup = categories.map(category =>
      `<li class="categories__item">
        <button class="categories__btn" type="button">${category}</button>
      </li>`
    ).join('');
    refs.allCategories.innerHTML = markup; 
}  
export function markupProducts(products) {
    refs.allProducts.innerHTML = '';
    const markup = products.map(product =>
      `<li class="products__item" data-id="${product.id}">
        <img class="products__image" src="${product.thumbnail}" alt="${product.title}"/>
        <p class="products__title">${product.title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${product.brand}</p>
        <p class="products__category">Category: ${product.category}</p>
        <p class="products__price">Price: $${product.price}</p>
      </li>`
    ).join('');
    refs.allProducts.innerHTML = markup; 
}