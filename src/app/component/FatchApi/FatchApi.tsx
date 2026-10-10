

export const apiMainPart = "https://api.abcz.workers.dev"
// export const apiMainPart = "https://api.api-store.workers.dev/"

export const FatchCategories = `${apiMainPart}/api/bazardor/categories`;
export const FatchCategoriesProduct = `${apiMainPart}/api/bazardor/products?category=`;

export const AllProductFatch = async ()=> {
    try {
        const res = await fetch(`${apiMainPart}/api/bazardor/products`);
        return await res.json();
        
    } catch (error) {
        console.error('Error fetching fitlog data:', error);
        return null; // or throw error; or return [];
    }
};
