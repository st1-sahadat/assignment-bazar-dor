'use client'
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import React, { use } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const SignInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, password: string }
        const { data, error } = await authClient.signIn.email({
            ...user
        })

        if (data) {
            console.log(data);
            redirect("/");
        } else if (error) {
            console.log(error);

        }
    }

    return (
        <div className="my-14 py-10 flex items-center justify-center bg-green-50 p-4">
            {/* sign in from */}
            <div className="w-full max-w-md rounded-xl border border-green-100 bg-white p-8 shadow-lg shadow-green-900/5">
                {/* Title */}
                <h2 className="mb-8 text-center text-3xl font-bold text-green-700">
                    সাইন ইন
                </h2>
                {/* Form Fields */}
                <form className="space-y-4" onSubmit={onSubmit}>

                    {/* Email Field */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            ইমেইল
                        </label>
                        <input
                            type="email" name='email' placeholder='Email'
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password" name='password' placeholder='Password'
                            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-gray-700 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-md bg-green-700 py-3 text-lg font-semibold text-white transition hover:bg-green-800"
                    >
                        সাইন ইন করুন
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    <span>আ্যাকাউন্ট নেই? </span>
                    <a href="#" className="font-medium text-green-700 hover:underline">
                        সাইন আপ করুন
                    </a>
                </div>
                {/* social sign in */}
                <div className="mt-6 flex items-center justify-center gap-3">
                    {/* google sign in */}
                    <button
                        // onClick={handleGoogleSignIn}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:border-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    >
                        <SiGoogle className="text-sm" />
                        <span>Google</span>
                    </button>
                    {/* gihub sign in */}
                    <button
                        // onClick={handleGithubSignIn}
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition hover:border-green-500 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/20"
                    >
                        <FaGithubSquare className="text-sm" />
                        <span>GitHub</span>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SignInPage;