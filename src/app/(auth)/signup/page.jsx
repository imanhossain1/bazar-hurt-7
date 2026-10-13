
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signUp } from "../../../lib/auth-client";
import SocialLogin from "../../../components/SocialLogin";

function SignUpPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            toast.error("দুটি পাসওয়ার্ড মিলছে না!");
            return;
        }

        setIsLoading(true);

        const { data, error } = await signUp.email({
            name,
            email,
            password,
            callbackURL: "/",
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("অ্যাকাউন্ট তৈরি সফল হয়েছে!");

        form.reset();
        router.push("/");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-10">
            <div className="w-full max-w-md rounded-2xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8">

                <Link
                    href="/"
                    className="block text-center text-2xl font-bold text-green-800"
                >
                    🛒 বাজার দর
                </Link>

                <h1 className="mt-6 text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mt-2 text-center text-sm text-base-content/60">
                    নতুন অ্যাকাউন্ট তৈরি করে বাজারদর দেখুন।
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                    <div>
                        <label htmlFor="name" className="mb-2 block font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="আপনার নাম"
                            className="input input-bordered w-full focus:border-green-700"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-2 block font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="আপনার ইমেইল লিখুন"
                            className="input input-bordered w-full focus:border-green-700"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="পাসওয়ার্ড তৈরি করুন"
                            className="input input-bordered w-full focus:border-green-700"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="confirmPassword"
                            className="mb-2 block font-medium"
                        >
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="আবার পাসওয়ার্ড লিখুন"
                            className="input input-bordered w-full focus:border-green-700"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn w-full border-0 bg-green-800 text-white hover:bg-green-900"
                    >
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Account Creating...
                            </>
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </form>

                <div className="divider my-5">অথবা</div>

                <SocialLogin />

                <p className="mt-5 text-center text-sm">
                    অ্যাকাউন্ট আছে?{" "}
                    <Link
                        href="/signin"
                        className="font-bold text-green-800 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </main>
    );
}

export default SignUpPage;
