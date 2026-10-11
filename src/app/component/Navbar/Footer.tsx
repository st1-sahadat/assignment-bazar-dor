import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-green-50 py-8 px-4 shadow-[0_-8px_30px_rgba(16,185,129,0.05)] sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-100 bg-white/70 px-4 py-5 text-center shadow-sm backdrop-blur-sm md:flex-row md:text-left">
                    <p className="text-sm font-semibold tracking-wide text-slate-700">
                        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>

                    <p className="text-sm text-slate-500">
                        সকল দাম সপ্তাহব্যাপী; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>
                </div>

                <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-emerald-100 pt-5 text-center md:flex-row md:text-left">
                    <p className="text-xs font-medium text-slate-500">
                        &copy; ২০২৬ বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500">
                        <a href="#" className="rounded-full px-2 py-1 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:underline">
                            গোপনীয়তা নীতি
                        </a>
                        <a href="#" className="rounded-full px-2 py-1 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:underline">
                            শর্তাবলী
                        </a>
                        <a href="#" className="rounded-full px-2 py-1 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:underline">
                            যোগাযোগ
                        </a>
                        <a href="#" className="rounded-full px-2 py-1 transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 hover:underline">
                            আমাদের সম্পর্কে
                        </a>
                    </div>
                </div>
        </footer>
    );
};

export default Footer;