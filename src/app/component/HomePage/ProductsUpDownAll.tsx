import { AllProductFatch } from '../FatchApi/FatchApi';
import { IMarqueeProducts } from '@/app/type/Type';
import CardPage from './Card';
import { RiAlignItemLeftLine } from 'react-icons/ri';

const ProductsUpDownAll = async () => {
    const allProductsData = await AllProductFatch() as IMarqueeProducts[];
    console.log(allProductsData);
    
    const upProductsHeighToLow = allProductsData.filter(item => item.change?.dir === "up").sort((a, b) => (b.change?.pct || 0) - (a.change?.pct || 0));
    const downProductsHeighToLow = allProductsData.filter(item => item.change?.dir === "down").sort((a, b) => (a.change?.pct || 0) - (b.change?.pct || 0));


    return (
        <div
            className="mt-14"
        >

            {/* Rate Increase */}
            <div className="mb-10 rounded-2xl border border-emerald-100 bg-white/95 p-4 shadow-[0_10px_30px_rgba(16,185,129,0.08)] backdrop-blur-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-xl shadow-sm ring-4 ring-emerald-50 text-emerald-600">
                            ⬆
                        </span>
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                            আজকে দাম বেড়েছে
                        </h1>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 shadow-sm sm:text-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>
                        ২৪ ঘণ্টা ট্রেন্ড
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {upProductsHeighToLow.slice(0, 6).map((item) => (
                        <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Rate Down */}
            <div className="mb-10 rounded-2xl border border-red-100 bg-white/95 p-4 shadow-[0_10px_30px_rgba(239,68,68,0.08)] backdrop-blur-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-xl shadow-sm ring-4 ring-red-50 text-red-600">
                            ⬇
                        </span>
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                            আজকে দাম কমেছে
                        </h1>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm sm:text-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                        ২৪ ঘণ্টা ট্রেন্ড
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {downProductsHeighToLow.slice(0, 6).map((item: IMarqueeProducts) => (
                        <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* All Product */}
            <div id="all-products" className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 shadow-sm ring-4 ring-slate-50">
                            <RiAlignItemLeftLine />
                        </span>
                        <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl">
                            সকল পণ্য
                        </h1>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {allProductsData.map((item: IMarqueeProducts) => (
                        <div key={item.id} className="mt-2 transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default ProductsUpDownAll;