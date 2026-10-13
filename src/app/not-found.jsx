import Link from "next/link";

function NotFound() {
    return (
        <main className="flex min-h-[75vh] items-center justify-center bg-base-100 px-4 py-12">
            <div className="w-full max-w-lg rounded-3xl border border-base-300 bg-base-200/50 p-8 text-center shadow-xl sm:p-12">
                <div className="text-8xl font-extrabold text-primary">
                    404
                </div>

                <div className="mt-4 text-6xl">🔎</div>

                <h1 className="mt-6 text-2xl font-extrabold sm:text-3xl">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h1>

                <p className="mt-3 leading-7 text-base-content/70">
                    দুঃখিত! আপনি যে পেজটি খুঁজছেন, সেটি নেই অথবা ঠিকানাটি ভুল।
                </p>

                <Link
                    href="/"
                    className="btn btn-primary mt-8 rounded-xl px-6"
                >
                    ← হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}

export default NotFound;