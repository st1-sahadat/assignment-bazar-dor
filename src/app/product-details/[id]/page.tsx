import {  apiMainPart } from '@/app/component/FatchApi/FatchApi';
import ProductsDetails from '@/app/component/Others/ProductsDetails';
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
    const data = await res.json();
    console.log(data);
    
    // if (!data) {
    //     return <p className="p-6 text-red-600">পণ্য পাওয়া যায়নি</p>;
    // }
    if(!data ){
        notFound()
    }


    return <ProductsDetails id={id} products={data}/>
}
