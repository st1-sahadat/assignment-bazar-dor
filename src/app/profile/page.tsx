'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userUpdate = Object.fromEntries(formData.entries()) as { name: string, image: string }

        await authClient.updateUser({
            ...userUpdate
        })
    }


    
    return (
        <div className="min-h-screen bg-slate-50 px-4 py-12 text-slate-800">
            <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                <h1 className="text-2xl font-bold text-slate-900">{user?.name}</h1>
                <p className="mt-2 text-slate-600">{user?.email}</p>
                <p className="mt-1 break-all text-sm text-slate-400">{user?.id}</p>
            </div>
            <div className="mx-auto mt-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-8">
                <form className="w-full space-y-4"
                    onSubmit={handleUpdateProfile}
                >
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