'use client'
import Image from 'next/image';
import React, { useContext } from 'react';
import NavCategories from './NavCategories';
import Link from 'next/link';
import { bazarContext } from '@/app/context/bazarContext';
import BanglaDate from '../Others/Date';

const Navbar = () => {
    const { activeTab, setActiveTab } = useContext(bazarContext);


    return (
        <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                {/* Left Section: Logo and Brand Info */}
                <Link href={"/"}   >
                    <div className="flex min-w-0 items-center gap-3">
                        {/* Green Icon Box */}
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-green-700 text-white shadow-md sm:h-12 sm:w-12">
                            {/* Shopping Cart logo */}
                            <Image src="/logo-icon.png"
                                alt="Bazar Dor logo" width={20} height={20}
                            />
                        </div>

                        {/* Brand Text */}
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900 sm:text-xl">
                                বাজার দর
                            </h1>
                            <p className="text-xs font-medium text-gray-500 sm:text-sm">
                                <BanglaDate />
                            </p>
                        </div>
                    </div>
                </Link>

                {/* Right Section: Auth Links */}
                <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-4">
                    {/* Sign In Link */}
                    <Link href={'../../sign-in'}>
                    <button
                        onClick={() => setActiveTab("sign-in")}
                        className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:flex-none sm:px-6 sm:py-2.5 sm:text-base 
                ${activeTab === "sign-in" ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 shadow-sm hover:bg-green-700 hover:text-white hover:shadow-md'}`}>
                        সাইন ইন
                    </button>
                    </Link>

                    {/* Sign Up Button */}
                    <Link href={'../../sign-up'}>
                    <button
                        onClick={() => setActiveTab("sign-up")}
                        className={`flex-1 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 sm:flex-none sm:px-6 sm:py-2.5 sm:text-base 
                ${activeTab === "sign-up" ? 'bg-green-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 shadow-sm hover:bg-green-700 hover:text-white hover:shadow-md'}`}>
                        সাইন আপ
                    </button>
                    </Link>
                </div>



            </div>
            <div className="border-t border-gray-100 bg-gray-50/80 px-4 py-2 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <NavCategories />
                </div>
            </div>
            <div>
                {/* <Marquee /> */}

            </div>


        </nav>
    );
};

export default Navbar;