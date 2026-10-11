"use client"
import Image from 'next/image';
import React from 'react';
import BanglaDate from '../Others/Date';

const Banner = () => {
    // Scroll down all product
    const handleScrollToProducts = () => {
        const targetElement = document.getElementById("all-products");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className=" bg-gray-50 p-4 sm:p-6 lg:p-8">
            {/* Main Card Container */}
            <div className="flex w-full flex-col items-center gap-6 rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] md:flex-row md:gap-10 md:p-8 lg:p-12">
                {/* Left Section: Text Content */}
                <div className="flex w-full flex-col items-start md:w-1/2">
                    {/* Date Badge */}
                    <div className="mb-5 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-800 sm:mb-6">
                        <BanglaDate />
                    </div>
                    {/* Heading */}
                    <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    {/* Description */}
                    <p className="mb-7 max-w-xl text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও ফলমূলের দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>
                    {/* CTA Button */}
                    <button
                        onClick={handleScrollToProducts}
                        className="w-full rounded-lg bg-green-700 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition duration-200 hover:bg-green-800 sm:w-auto"
                    >
                        সব পণ্য দেখুন
                    </button>
                </div>

                {/* Right Section: Illustration */}
                <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                    <Image
                        src="/bazar-hero.png"
                        alt="বাজারের সবজি ও ফলের ঝুড়ি"
                        className="w-full max-w-70 object-contain md:max-w-100"
                        height={400}
                        width={200}
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;




