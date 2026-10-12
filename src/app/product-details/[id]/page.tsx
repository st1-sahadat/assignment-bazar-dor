import { apiMainPart } from '@/app/component/FatchApi/FatchApi';
import ProductsDetails from '@/app/component/HomePage/Others/ProductsDetails';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryContent params={params} />
        </Suspense>
    );
}

const CategoryContent = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`${apiMainPart}/api/bazardor/products/${id}`);
    // 1. Check if the server responded with an error (e.g., 404, 500)
    if (!res.ok) {
        notFound(); // Renders the not-found.tsx page
    }
    const data = await res.json();

    if (!data || Object.keys(data).length === 0) {
        notFound(); // Renders the not-found.tsx page
    }


    return <ProductsDetails id={id} products={data} />
}
