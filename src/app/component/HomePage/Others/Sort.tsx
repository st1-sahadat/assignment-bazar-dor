'use client';

import { bazarContext } from '@/app/context/bazarContext';
import React, { useContext, useState } from 'react';

const SortingPage = () => {
    const { sortProduct, setSortProduct } = useContext(bazarContext);
    const [sortKey, setSortKey] = useState<'default' | 'low' | 'high'>('default');

    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value as 'default' | 'low' | 'high';
        setSortKey(value);

        if (!sortProduct?.length) return;

        const sorted = [...sortProduct]; // copy — don't mutate context state

        if (value === 'low') {
            sorted.sort((a, b) => a.today - b.today);   // کم দাম → ascending
        } else if (value === 'high') {
            sorted.sort((a, b) => b.today - a.today);   // বেশি দাম → descending
        } else {
            sorted.sort((a, b) => Number(a.id) - Number(b.id)); // default → original order
        }

        setSortProduct(sorted);
    };

    

    return (
        <div className="flex flex-col items-stretch gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-end">
            <label className="text-sm font-medium text-gray-700 sm:mr-3">
                সাজান
            </label>

            <div className="relative w-full sm:w-auto">
                <select
                    value={sortKey}
                    onChange={handleSort}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm text-gray-700 outline-none transition focus:border-green-500 focus:ring-1 focus:ring-green-500 sm:w-auto"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="low">কম দাম</option>
                    <option value="high">বেশি দাম</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SortingPage;