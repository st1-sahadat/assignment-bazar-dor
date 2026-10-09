import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-6 px-6">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                {/* Left Side Text (From Image) */}
                <p className="text-sm font-medium text-gray-700">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>

                {/* Right Side Text (From Image) */}
                <p className="text-sm text-gray-500">
                    সকল দাম সপ্তাহব্যাপী; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>
            </div>

            {/* --- Added Options Section --- */}
            <div className="mx-auto mt-6 max-w-7xl border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

                {/* Copyright Option */}
                <p className="text-xs text-gray-400">
                    &copy; ২০২৬ বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                </p>

                {/* Quick Links Options */}
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                    <a href="#" className="transition hover:text-green-600 hover:underline">গোপনীয়তা নীতি</a>
                    <a href="#" className="transition hover:text-green-600 hover:underline">শর্তাবলী</a>
                    <a href="#" className="transition hover:text-green-600 hover:underline">যোগাযোগ</a>
                    <a href="#" className="transition hover:text-green-600 hover:underline">আমাদের সম্পর্কে</a>
                </div>

            </div>
            {/* --------------------------- */}

        </footer>
    );
};

export default Footer;