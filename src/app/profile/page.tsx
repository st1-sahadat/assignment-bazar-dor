'use client'
import { authClient } from "@/lib/auth-client";

const ProfilePage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    console.log(user);
    

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userUpdate = Object.fromEntries(formData.entries()) as { name: string, image: string }

        await authClient.updateUser({
            ...userUpdate
        })
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* My profile */}
                <header className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Account</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">My profile</h1>
                    <p className="mt-2 text-slate-500">Manage your personal information and account settings.</p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
                        <div className="flex flex-col gap-5 border-b border-slate-100 pb-6 sm:flex-row sm:items-center">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-2xl font-bold text-indigo-700" aria-label="Jane Doe initials">JD</div>
                            <div className="min-w-0 flex-1">
                                <h2 className="text-xl font-bold">{user?.name}</h2>
                                <p className="mt-1 break-all text-sm text-slate-500">{user?.email}</p>
                                <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Active member</span>
                            </div>
                            <button type="button" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">Edit photo</button>
                        </div>

                        <div className="pt-6">
                            <h3 className="text-lg font-semibold">Personal information</h3>
                            <p className="mt-1 text-sm text-slate-500">Update your details to keep your account up to date.</p>
                            <form className="mt-6 grid gap-5 sm:grid-cols-2"
                                onSubmit={handleUpdateProfile}
                            >
                                <label className="block text-sm font-medium text-slate-700">
                                    First name
                                    <input type="text" defaultValue={user?.name} autoComplete="given-name" className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <label className="block text-sm font-medium text-slate-700">
                                    Last name
                                    <input type="text" defaultValue="" autoComplete="family-name" className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                                    Email address
                                    <input type="email" defaultValue={user?.email} autoComplete="email" className="mt-2 w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                                    Bio
                                    <textarea rows={4} placeholder="Tell us a little about yourself" className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-3.5 py-2.5 text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
                                </label>
                                <div className="flex flex-col-reverse gap-3 sm:col-span-2 sm:flex-row sm:justify-end">
                                    <button type="reset" className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">Cancel</button>
                                    <button type="submit" className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </section>

                    <aside className="space-y-6">
                        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                            <h2 className="font-semibold">Account overview</h2>
                            <dl className="mt-5 divide-y divide-slate-100">
                                <div className="flex items-center justify-between py-4 first:pt-0">
                                    <dt className="text-sm text-slate-500">Member since</dt>
                                    <dd className="text-sm font-semibold">{user?.createdAt?.toLocaleDateString() ?? "—"}</dd>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <dt className="text-sm text-slate-500">Orders</dt>
                                    <dd className="text-sm font-semibold">8</dd>
                                </div>
                                <div className="flex items-center justify-between py-4 last:pb-0">
                                    <dt className="text-sm text-slate-500">Saved items</dt>
                                    <dd className="text-sm font-semibold">8</dd>
                                </div>
                            </dl>
                        </section>
                        <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 sm:p-6">
                            <h2 className="font-semibold">Make your account yours</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-600">Keep your profile details current for a smoother shopping experience.</p>
                        </section>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;