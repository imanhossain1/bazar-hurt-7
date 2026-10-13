import Link from "next/link";

function Navbar() {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full border-b border-base-300 bg-base-100 shadow-sm">
            <div className="mx-auto max-w-7xl px-4">
                {/* First Row: Logo + Auth UI */}
                <div className="flex items-center justify-between gap-3 py-4">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="text-4xl">🛒</span>

                        <div>
                            <h1 className="text-xl font-extrabold text-primary sm:text-2xl">
                                বাজার দর
                            </h1>

                            <p className="mt-1 text-xs text-base-content/70">
                                {date}
                            </p>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        <Link href="/signin" className="btn btn-outline btn-primary btn-sm sm:btn-md">
                            সাইন ইন
                        </Link>

                        <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
                            সাইন আপ
                        </Link>
                    </div>
                </div>

                {/* Second Row: Category Links */}
                <nav className="border-t border-base-300">
                    <div className="flex items-center gap-2 overflow-x-auto py-3">
                        <Link
                            href="/"
                            className="btn btn-primary btn-sm shrink-0"
                        >
                            হোম
                        </Link>

                        <Link
                            href="/category/chal"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🍚 চাল
                        </Link>

                        <Link
                            href="/category/dal"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🫘 ডাল
                        </Link>

                        <Link
                            href="/category/tel"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🛢️ তেল
                        </Link>

                        <Link
                            href="/category/sobji"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🥬 সবজি
                        </Link>

                        <Link
                            href="/category/mach"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🐟 মাছ
                        </Link>

                        <Link
                            href="/category/mangsho"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🍗 মাংস
                        </Link>

                        <Link
                            href="/category/dim-dui"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🥛 ডিম-দুধ
                        </Link>

                        <Link
                            href="/category/mosla"
                            className="btn btn-ghost btn-sm shrink-0"
                        >
                            🌶️ মসলা
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;