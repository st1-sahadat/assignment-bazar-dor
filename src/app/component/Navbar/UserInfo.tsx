'use client'
import { bazarContext } from '@/app/context/bazarContext';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

const UserInfo = () => {
    const { activeTab, setActiveTab } = useContext(bazarContext);
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [showSignOut, setShowSignOut] = useState(false);

    const handleSignOut = async () => {
        setShowSignOut(false);
        await authClient.signOut();
    }

    return (
        <div>
            {
                user ?
                    <div className="absolute right-4 top-4 flex items-center gap-3 rounded-full border border-gray-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur-sm">
                        {/* profile pic */}
                        <Link href={"/profile"} className="flex items-center gap-3 rounded-full transition-colors hover:bg-green-50">
                            <div className="avatar h-10 w-10 overflow-hidden rounded-full ring-2 ring-green-100">
                                <div className="h-full w-full">
                                    <Image
                                        src={user?.image as string}
                                        alt={user?.name ?? 'User avatar'}
                                        height={40}
                                        width={40}
                                        className="h-full w-full rounded-full object-cover"
                                    />
                                </div>
                            </div>
                            <h2 className="text-sm font-semibold tracking-wide text-green-800">{user.name.toUpperCase()}</h2>
                        </Link>

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowSignOut((prev) => !prev)}
                                aria-label="Toggle sign out menu"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-700 transition-colors hover:bg-green-100 hover:text-green-800"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`h-4 w-4 transition-transform duration-200 ${showSignOut ? 'rotate-180' : ''}`}
                                >
                                    <path d="M5.25 7.5 10 12.25 14.75 7.5h-9.5Z" />
                                </svg>
                            </button>

                            {showSignOut && (
                                <div className="absolute right-0 top-full z-10 mt-2 w-40 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                                    <Link
                                        href="/profile"
                                        className="mb-1 block rounded-lg px-3 py-2 text-left text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-800"
                                        onClick={() => setShowSignOut(false)}
                                    >
                                        <span className="flex w-full items-center justify-between gap-3.5">
                                        <span>{user.name.toLowerCase()}</span>
                                        <span>Profile</span>
                                        </span>
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={handleSignOut}
                                        className="w-full rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-700"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    :
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
            }
        </div>
    );
};

export default UserInfo;