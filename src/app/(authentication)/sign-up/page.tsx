'use client'
import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGoogle } from 'react-icons/si';

const SignUpPage = () => {
    return (
        <div className="flex my-14 py-10 items-center justify-center bg-linear-to-br from-emerald-50 via-white to-green-50 p-4">
            <div className="w-full max-w-md rounded-2xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-100/70 sm:p-8">
                {/* Title */}
                <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-emerald-700">
                    সাইন আপ
                </h2>

                {/* Form Fields */}
                <form className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            নাম
                        </label>
                        <input
                            type="text" name='name' placeholder='Name'
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                        />
                    </div>

                    {/* Image Field */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Image
                        </label>
                        <input
                            type="url" name='image' placeholder='Image'
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            ইমেইল
                        </label>
                        <input
                            type="email" name='email' placeholder='Email'
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password" name='password' placeholder='Password'
                            className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-6 w-full rounded-lg bg-linear-to-r from-emerald-700 to-green-600 py-3 text-lg font-bold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:from-emerald-800 hover:to-green-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-emerald-200"
                    >
                        সাইন আপ করুন
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-6 text-center text-sm text-gray-500">
                    <span>আ্যাকাউন্ট আছে? </span>
                    <a href="#" className="font-semibold text-emerald-700 transition hover:text-emerald-900 hover:underline">
                        সাইন ইন করুন
                    </a>
                </div>
                {/* social sign in */}
                <div className="mt-6 flex items-center justify-center gap-3">
                    {/* google sign in */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                        <SiGoogle className="text-sm" />
                        <span>Google</span>
                    </button>
                    {/* gihub sign in */}
                    <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    >
                        <FaGithubSquare className="text-sm" />
                        <span>GitHub</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;