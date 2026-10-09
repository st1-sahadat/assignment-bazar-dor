



export const FatchCategories = "https://api.api-store.workers.dev/api/bazardor/categories";
export const FatchCategoriesProduct = "https://api.api-store.workers.dev/api/bazardor/products?category=";

export const AllProductFatch = async ()=> {
    try {
        const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
        return await res.json();
        
    } catch (error) {
        console.error('Error fetching fitlog data:', error);
        return null; // or throw error; or return [];
    }
};
