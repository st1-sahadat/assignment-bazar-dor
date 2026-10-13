'use client'
import Image from 'next/image';
import NavCategories from './NavCategories';
import Link from 'next/link';
import BanglaDate from '../HomePage/Others/Date';
import UserInfo from './UserInfo';
import { Suspense, useState } from 'react';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isPending } = authClient.useSession();



    if (isPending) {
        return (
            <div className="flex min-h-16 items-center justify-center" role="status" aria-label="Loading">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
            </div>
        )
    }
    return (

        <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
            <div className="relative flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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

                {/* UserInfo - desktop only */}
                <div className="hidden sm:block">
                    <UserInfo />
                </div>


                {/* Hamburger button (mobile only) */}
                <div className="absolute right-4 top-4 sm:hidden">
                    <button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="rounded-lg p-2 text-2xl leading-none text-gray-700 hover:bg-gray-100"
                    >
                        <span aria-hidden="true">{isMenuOpen ? '✕' : '≡'}</span>
                    </button>
                </div>

                {/* UserInfo - mobile dropdown (toggled by hamburger) */}
                {isMenuOpen && (
                    <div className="absolute left-0 right-0 top-full border-t border-gray-100 bg-white px-4 pt-3 sm:hidden">
                        <UserInfo />
                    </div>
                )}
            </div>

            <div className="border-t border-gray-100 bg-gray-50/80 px-4 py-2 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <Suspense fallback={<div className="h-6 w-64 bg-gray-100 rounded animate-pulse" />}>
                        <NavCategories />
                    </Suspense>
                </div>
            </div>
            <div>
                {/* <Marquee /> */}

            </div>


        </nav>
    );
};

export default Navbar;