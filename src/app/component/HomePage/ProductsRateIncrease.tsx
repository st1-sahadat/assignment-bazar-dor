import { AllProductFatch } from '../FatchApi/FatchApi';
import { IMarqueeProducts } from '@/app/type/Type';
import CardPage from './Card';
import { RiAlignItemLeftLine } from 'react-icons/ri';

const ProductsRateIncrease = async () => {
    const allProductsData = await AllProductFatch() as IMarqueeProducts[];

    const upProducts = allProductsData.filter(item => item.change?.dir === "up");
    const downProducts = allProductsData.filter(item => item.change?.dir === "down");


    return (
        <div  >
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-400 via-orange-500 to-red-500" />

            {/* Rate Increase */}
            <div>
                <div className="pt-6 mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg shadow-sm ring-4 ring-emerald-50">
                            ⬆
                        </span>
                        <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl lg:text-3xl">
                            আজকে দাম বেড়েছে
                        </h1>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600 shadow-sm sm:text-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-red-500"></span>
                        ২৪ ঘণ্টা ট্রেন্ড
                    </div>

                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {upProducts.slice(0, 6).map((item) => (
                        <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Rate Down */}
            <div>
                <div className="mt-12 border-t border-red-200/80 pt-8 mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-lg shadow-sm ring-4 ring-red-50">
                            ⬇
                        </span>
                        <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl lg:text-3xl">
                            আজকে দাম কমেছে
                        </h1>
                    </div>

                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm sm:text-sm">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                        ২৪ ঘণ্টা ট্রেন্ড
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {downProducts.slice(0, 6).map((item: IMarqueeProducts) => (
                        <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>

            {/* All Product */}
            <div>
                <div className="mt-12 border-t border-red-200/80 pt-8 mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-lg shadow-sm ring-4 ring-red-50">
                           <RiAlignItemLeftLine />

                        </span>
                        <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl lg:text-3xl">
                            সকল পণ্য
                        </h1>
                    </div>

                    
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {allProductsData.map((item: IMarqueeProducts) => (
                        <div key={item.id} className="transition-transform duration-300 hover:-translate-y-1">
                            <CardPage item={item} />
                        </div>
                    ))}
                </div>
            </div>

        </div>



    );
};

export default ProductsRateIncrease;