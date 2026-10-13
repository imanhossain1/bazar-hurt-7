

const apiProductUrl = "https://openapi.programming-hero.com/api/bazardor/products";
const apiCategoryUrl = "https://openapi.programming-hero.com/api/bazardor/categories";

// সব Product আনার function
export const getProducts = async () => {
    const res = await fetch(apiProductUrl);
    return res.json();
};

// সব Category আনার function
export const getCategories = async () => {
    const res = await fetch(apiCategoryUrl);
    return res.json();
};

// নির্দিষ্ট Category-এর Product আনার function
export const getCategoryProducts = async (categorySlug) => {
    const categoryProductUrl = `${apiProductUrl}?category=${categorySlug}`;

    const res = await fetch(categoryProductUrl);
    return res.json();
};