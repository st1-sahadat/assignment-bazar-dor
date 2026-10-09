import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-16">
            <section className="w-full max-w-2xl text-center">
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-1 ring-red-100">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-10 w-10" stroke="currentColor" strokeWidth="1.7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.5m0 3h.01M10.3 3.9 2.6 17.2A1.9 1.9 0 0 0 4.2 20h15.6a1.9 1.9 0 0 0 1.6-2.8L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                    </svg>
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-red-600">Error 404</p>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">এই পৃষ্ঠাটি খুঁজে পাওয়া যায়নি</h1>
                <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
                    দুঃখিত, আপনি যে পণ্য, ক্যাটাগরি বা পৃষ্ঠা খুঁজছেন সেটি সরানো হয়েছে, নাম বদলেছে বা ঠিকানাটি ভুল হয়েছে।
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href="/" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto">
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m3 10 9-7 9 7M5 9v11h14V9M9 20v-7h6v7" />
                        </svg>
                        হোমপেজে ফিরে যান
                    </Link>
                    <Link href="/" className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 sm:w-auto">
                        পণ্যসমূহ দেখুন
                    </Link>
                </div>
                <div className="mx-auto mt-12 h-px max-w-xs bg-slate-200" />
                <p className="mt-5 text-sm text-slate-500">Bazar API</p>
            </section>
        </main>
    );
};

export default NotFoundPage;