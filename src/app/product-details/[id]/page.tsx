import { AllProductFatch } from '@/app/component/FatchApi/FatchApi';
import ProductsDetails from '@/app/component/Others/ProductsDetails';
import { IMarqueeProducts } from '@/app/type/Type';
import Link from 'next/link';
import React, { Suspense } from 'react';

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CategoryContent params={params} />
        </Suspense>
    );
}

const CategoryContent = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);
    const data = await res.json();
    if (!data) {
        return <p className="p-6 text-red-600">পণ্য পাওয়া যায়নি</p>;
    }


    return <ProductsDetails id={id} products={data}/>
}
