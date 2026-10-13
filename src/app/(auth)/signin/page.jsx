
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "../../../lib/auth-client";
import SocialLogin from "../../../components/SocialLogin";

function SignInPage() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const email = formData.get("email");
        const password = formData.get("password");

        setIsLoading(true);

        const { data, error } = await signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        setIsLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("লগইন সফল হয়েছে!");

        form.reset();
        router.push("/");
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-sm rounded-2xl bg-base-100 p-6 shadow-lg">

                <Link href="/" className="text-2xl font-bold text-green-800">
                    🛒 বাজার দর
                </Link>

                <h1 className="mt-6 text-3xl font-bold">Sign In</h1>

                <p className="mt-2 text-sm text-base-content/60">
                    আপনার অ্যাকাউন্টে লগইন করুন।
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-2 block">
                            Email
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-2 block">
                            Password
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn w-full bg-green-800 text-white hover:bg-green-900"
                    >
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Logging In...
                            </>
                        ) : (
                            "Sign In"
                        )}
                    </button>
                </form>

                <div className="divider">অথবা</div>

                <SocialLogin />

                <p className="mt-5 text-center text-sm">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link href="/signup" className="font-bold text-green-800">
                        Sign Up
                    </Link>
                </p>

            </div>
        </main>
    );
}

export default SignInPage;
