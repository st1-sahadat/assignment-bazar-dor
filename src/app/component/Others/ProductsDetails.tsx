'use client'
import { bazarContext } from '@/app/context/bazarContext';
import { IMarqueeProducts } from '@/app/type/Type';
// import { IMarqueeProducts } from '@/app/type/Type';
import Link from 'next/link';
import { useContext } from 'react';
import { convertToBanglaNumber, formatUnit } from './EngToBnAndOther';
import { notFound } from 'next/navigation';

const ProductsDetails = ({ id, products }: { id: string, products: IMarqueeProducts }) => {
    const { categories } = useContext(bazarContext);
    
    const currentCategory = categories.find(category => category.slug === products?.category);

    const cheapest = (products.markets ?? []).reduce((acc, cur) => (cur.min < acc.min ? cur : acc));
    const priciest = (products.markets ?? []).reduce((acc, cur) => (cur.max > acc.max ? cur : acc));
    const averageProductPrice = (cheapest.min + priciest.max) / 2;


    return (
        <div>
            {/* BreadCrumb */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:text-sm">
                <Link href="/" className="transition-colors hover:text-gray-900">হোম</Link>
                <span aria-hidden="true" className="text-gray-400">→</span>
                <p className="font-medium capitalize text-gray-900">{currentCategory?.nameBn}</p>
                <span aria-hidden="true" className="text-gray-400">→</span>
                <p className="font-medium capitalize text-gray-900">{products?.nameBn}</p>

            </div>
            <div className="min-h-screen bg-gray-50 p-4 md:p-8">
                <div className="mx-auto max-w-5xl space-y-6">

                    {/* --- 1. Header Card --- */}
                    <div className="flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-5">
                            {/* Icon Box */}
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-4xl shadow-sm border border-gray-100">
                                {products.image}
                            </div>

                            {/* Title Info */}
                            <div className="flex flex-col">
                                <h1 className="text-2xl font-bold text-gray-900 leading-tight md:text-3xl">
                                    {products.nameBn}
                                </h1>
                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    প্রতি {formatUnit(products.unit)} - {products.categoryNameBn}
                                </p>
                                <p className="mt-2 text-sm font-medium text-gray-600">
                                    গতকালের তুলনায় আজ দাম {products?.change?.dir === "up" ? 'বেড়েছে' : 'কমেছে'} -{convertToBanglaNumber(products.today - products.yesterday)} টাকা
                                </p>
                            </div>
                        </div>

                        {/* Price Box */}
                        <div className="flex shrink-0 flex-col items-center justify-center rounded-2xl bg-gray-50 px-8 py-4 border border-gray-100 min-w-[160px]">
                            <span className="text-xs font-semibold text-gray-500">বাজারের দাম</span>
                            <span className="my-1 text-4xl font-bold text-gray-900">
                                {convertToBanglaNumber(products.today)}
                            </span>
                            <span className="text-sm font-medium text-gray-500 mb-2">
                                টাকা / {formatUnit(products.unit)}
                            </span>

                            {/* Change Badge */}
                            {/* <div className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs font-bold ${isIncreased ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'
                                }`}>
                                <span>{isIncreased ? '▲' : '▼'}</span>
                                <span>{toBn(data.change.pct)}%</span>
                            </div> */}
                        </div>
                    </div>

                    {/* --- 2. Price Summary Cards --- */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-bold text-gray-900">দামের সারসংক্ষেপ</h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {/* Lowest Price */}
                            <div className="rounded-xl border border-gray-100 p-4">
                                <p className="text-sm font-medium text-gray-500 mb-1">সর্বনিম্ন দাম</p>
                                <p className="text-2xl font-bold text-green-600 mb-1">{convertToBanglaNumber(cheapest.min)} টাকা</p>
                            </div>
                            {/* Highest Price */}
                            <div className="rounded-xl border border-gray-100 p-4">
                                <p className="text-sm font-medium text-gray-500 mb-1">সর্বাধিক দাম</p>
                                <p className="text-2xl font-bold text-green-600 mb-1">{convertToBanglaNumber(priciest.max)} টাকা</p>
                            </div>
                            {/* Average Price */}
                            <div className="rounded-xl border border-gray-100 p-4">
                                <p className="text-sm font-medium text-gray-500 mb-1">গড় দাম</p>
                                <p className="text-2xl font-bold text-green-600 mb-1">{convertToBanglaNumber(averageProductPrice.toFixed())} টাকা</p>
                                <p className="text-xs text-gray-500">প্রতি {formatUnit(products.unit)}-এর হিসাবে</p>
                            </div>

                        </div>
                    </div>

                    {/* --- 3. Market Wise Table --- */}
                    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden">
                        <h2 className="mb-4 text-lg font-bold text-gray-900">বাজারভিত্তিক আজকের দাম</h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="border-b border-gray-200 text-gray-500">
                                        <th className="pb-3 font-medium">বাজার</th>
                                        <th className="pb-3 font-medium">বিভাগ</th>
                                        <th className="pb-3 font-medium">সর্বনিম্ন</th>
                                        <th className="pb-3 font-medium">সর্বাধিক</th>
                                        <th className="pb-3 font-medium text-right">গড়</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {(products.markets ?? []).map((market, index) => {
                                        const avgPrice = (market.min + market.max) / 2;

                                        return (
                                            <tr key={index} className="text-gray-900">
                                                <td className="py-3 font-medium">{market.market}</td>
                                                <td className="py-3 text-gray-600">{market.division}</td>
                                                <td className="py-3">{convertToBanglaNumber(market.min)} টাকা</td>
                                                <td className="py-3">{convertToBanglaNumber(market.max)} টাকা</td>
                                                <td className="py-3 text-right font-medium">{convertToBanglaNumber(avgPrice.toFixed())} টাকা</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;
