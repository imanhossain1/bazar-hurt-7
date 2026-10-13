
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";
// import CategoryNav from "./CategoryNav";

function Navbar() {
    const router = useRouter();

    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    const { data: session, isPending } = authClient.useSession();

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("সফলভাবে লগআউট হয়েছে!");
        router.push("/");
        router.refresh();
    };

    return (
        <header className="w-full border-b border-base-300 bg-base-100 shadow-sm">
            <div className="mx-auto max-w-7xl px-4">

                {/* First Row: Logo + Auth UI */}
                <div className="flex items-center justify-between gap-3 py-4">

                    {/* Logo */}
                    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
                        <span className="text-3xl sm:text-4xl">🛒</span>

                        <div className="min-w-0">
                            <h1 className="text-lg font-extrabold text-primary sm:text-2xl">
                                বাজার দর
                            </h1>

                            <p className="mt-1 text-xs text-base-content/70">
                                {date}
                            </p>
                        </div>
                    </Link>

                    {/* Authentication */}
                    <div className="flex shrink-0 items-center gap-2">

                        {isPending ? (
                            <span className="loading loading-spinner loading-md text-primary"></span>
                        ) : session?.user ? (
                            <div className="dropdown dropdown-end">
                                <button
                                    type="button"
                                    tabIndex={0}
                                    className="btn btn-ghost btn-sm gap-2 sm:btn-md"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 font-bold text-green-800">
                                        {session.user.name?.charAt(0)?.toUpperCase() || "U"}
                                    </div>

                                    <span className="hidden max-w-32 truncate sm:inline">
                                        {session.user.name}
                                    </span>

                                    <span>⌄</span>
                                </button>

                                <ul
                                    tabIndex={0}
                                    className="menu dropdown-content z-50 mt-3 w-64 rounded-box border border-base-300 bg-base-100 p-3 shadow-xl"
                                >
                                    <li className="menu-title">
                                        <span>আপনার অ্যাকাউন্ট</span>
                                    </li>

                                    <li className="pointer-events-none mb-2">
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="font-bold text-base-content">
                                                {session.user.name}
                                            </span>

                                            <span className="max-w-full break-all text-xs text-base-content/60">
                                                {session.user.email}
                                            </span>
                                        </div>
                                    </li>

                                    <li>
                                        <Link href="/profile">
                                            👤 প্রোফাইল
                                        </Link>
                                    </li>

                                    <li>
                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                        >
                                            🚪 সাইন আউট
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link
                                    href="/signin"
                                    className="btn btn-outline btn-primary btn-sm sm:btn-md"
                                >
                                    সাইন ইন
                                </Link>

                                <Link
                                    href="/signup"
                                    className="btn btn-primary btn-sm sm:btn-md"
                                >
                                    সাইন আপ
                                </Link>
                            </>
                        )}

                    </div>
                </div>

                {/* Second Row: Category Links */}
                {/* <CategoryNav /> */}

            </div>
        </header>
    );
}

export default Navbar;
