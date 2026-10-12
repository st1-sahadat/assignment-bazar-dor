'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateValue = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const userUpdate = Object.fromEntries(formData.entries()) as { name: string, image: string }

        await authClient.updateUser({
            ...userUpdate
        })
        setIsEditing(false);
    }
    
    // Sign out tigger button
    const handleSignOut = async () => {
        setIsEditing(false);
        await authClient.signOut();
    }


    
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md sm:p-6 mx-auto flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className=" flex-1 ">
                    <h1 className="wrap-break-word text-xl font-bold text-slate-900 sm:text-2xl">{user?.name}</h1>
                    <p className="mt-2 wrap-break-word text-sm text-slate-600 sm:text-base">{user?.email}</p>
                    <p className="mt-1 break-all text-xs text-slate-400 sm:text-sm">{user?.id}</p>
                </div>
                {/* Update Profile button */}
                <div className= {`${isEditing ? 'hidden' : ''} flex shrink-0`}>
                    <button className="w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                            onClick={() => setIsEditing(true)}>
                        Update Profile
                    </button>
                </div>
                {/* Sign Out button */}
                <div className= {`${isEditing ? '' : 'hidden'} flex shrink-0`}>
                    <button className="w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:w-auto"
                            onClick={handleSignOut}
                            >
                        Sign Out
                    </button>
                </div>
            </div>

            {/* form field */}
            <div className={`${isEditing ? ' ' : 'hidden'} relative mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8`}>
                <form className="w-full space-y-4"
                    onSubmit={handleUpdateValue}
                >
                    <div className="absolute right-2 top-1">
                        <button type="button" 
                        onClick={() => setIsEditing(false)} 
                        aria-label="Close profile editor" 
                        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <span>✖</span>
                        </button>
                    </div>
                    {/* Name Field */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                            নাম
                        </label>
                        <input
                            type="text" name='name' placeholder='Name'
                            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-2.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-green-700 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
                    >
                        পরিবর্তন করুন
                    </button>
                </form>
            </div>
        </div>

    );
};

export default ProfilePage;