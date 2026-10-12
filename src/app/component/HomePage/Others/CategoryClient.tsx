'use client'; // This makes it a Client Component

import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { bazarContext } from '@/app/context/bazarContext';
import { IMarqueeProducts } from '@/app/type/Type';
import CardPage from '../Card';
import { convertToBanglaNumber } from './EngToBnAndOther';
import { notFound } from 'next/navigation';
import SortingPage from './Sort';

export default function CategoryClient({ id, products }: { id: string, products: IMarqueeProducts[] }) {
    const { categories, sortProduct, setSortProduct } = useContext(bazarContext);

    // 1. Sync server-fetched products into context so <SortingPage /> can re-order them
    useEffect(() => {
        setSortProduct(products);
    }, [products, setSortProduct]);

    const currentCategory = categories.find((f) => f.slug === id);
    if (!currentCategory) {
        notFound();
    }
    



    return (
        <div className="w-full pb-4">
            {/* BreadCrumb */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
                <Link href="/" className="transition-colors hover:text-gray-900">হোম</Link>
                <span aria-hidden="true" className="text-gray-400">→</span>
                <p className="font-medium capitalize text-gray-900">{currentCategory?.nameBn}</p>
            </div>
            {/* categories default contant */}
            <div className="mt-6 space-y-4 sm:mt-10">
                {/* 1. Header Card */}
                <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:p-5">
                    {/* Icon Container */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl sm:h-12 sm:w-12 sm:text-2xl">
                        {currentCategory?.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
                            {currentCategory?.nameBn}
                        </h2>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                            {convertToBanglaNumber(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>
                {/* 2. Filter Bar */}
                <div>
                    <SortingPage />
                </div>


                {/* 3. Status Text */}
                <p className="pt-2 text-xs text-gray-500 sm:text-sm">
                    মোট {convertToBanglaNumber(products.length)}টি পণ্য দেখানো হচ্ছে
                </p>

            </div>
            {/* Render your products here using the `products` prop */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {sortProduct.map((product) => <CardPage key={product.id} item={product} />)}
            </div>
        </div>
    );
}



