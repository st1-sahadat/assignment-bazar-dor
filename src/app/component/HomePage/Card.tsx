import { IMarqueeProducts } from '@/app/type/Type';
import { convertToBanglaNumber, formatUnit, upDownIcon } from '../Others/EngToBnAndOther';
import Link from 'next/link';

const CardPage = ({ item }: { item: IMarqueeProducts }) => {
    
    return (
        <>
        <Link href={`/product-details/${item.id}`}>
        <div  className="group flex items-stretch justify-center">
            <div className="w-full rounded-2xl border border-orange-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange-200 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 text-2xl shadow-inner sm:h-16 sm:w-16">
                        {item.image}
                    </div>

                    <div className="min-w-0 flex-1 pt-1">
                        <h3 className="line-clamp-2 text-base font-bold leading-tight text-gray-900 sm:text-lg">
                            {item.nameBn}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-gray-500 sm:text-sm">
                            {formatUnit(item.unit)}
                        </p>
                    </div>
                </div>

                <div className="mt-5 flex items-end justify-between gap-3">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-wide text-gray-500 sm:text-xs">
                            আজকের দাম
                        </span>
                        <div className="mt-1 flex flex-wrap items-baseline gap-1">
                            <span className="text-xl font-extrabold text-gray-900 sm:text-2xl">
                                {convertToBanglaNumber(item.today)}
                            </span>
                            <span className="text-xs font-medium text-gray-600 sm:text-sm">টাকা</span>
                        </div>
                    </div>

                    <div
                        className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-bold shadow-sm ring-1 sm:text-sm 
                            ${item.change?.dir === 'down'
                                ? 'bg-green-50 text-green-700 ring-green-100'
                                : 'bg-red-50 text-red-700 ring-red-100'
                            }`}
                    >
                        <span className="text-sm">{upDownIcon(item.change)}</span>
                        <span>{item.change?.pct}</span>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

export default CardPage;