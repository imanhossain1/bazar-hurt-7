
import Image from "next/image";
import Link from "next/link";

function Hero() {
    return (
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-lime-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

            {/* Hero Content */}
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-16 lg:py-24">

                {/* Left Content */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/90 px-4 py-2 shadow-sm">
                        <span className="text-xl">🇧🇩</span>
                        <span className="text-sm font-bold text-emerald-800">
                            বাংলাদেশের প্রতিদিনের বাজারদর
                        </span>
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    </div>

                    <h1 className="mt-7 text-4xl font-black leading-[1.35] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.65rem]">
                        বাজারের সঠিক দাম
                        <br />
                        জানুন সবার আগে,
                        <br />
                        <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-lime-500 bg-clip-text text-transparent">
                            সাশ্রয় করুন প্রতিদিন!
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        চাল, ডাল, তেল, মাছ, মাংস ও নিত্যপ্রয়োজনীয়
                        পণ্যের দাম দেখুন এক জায়গায়। বাজারে যাওয়ার
                        আগেই জেনে নিন কোন পণ্যের দাম কত।
                    </p>

                    {/* Feature Highlights */}
                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/80 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-green-200 text-xl">
                                📊
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">
                                    দাম তুলনা
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    সহজে দাম দেখুন
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/80 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 text-xl">
                                🛡️
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">
                                    তথ্য এক জায়গায়
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    সহজে খুঁজে নিন
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-2xl border border-amber-100 bg-white/80 p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-200 text-xl">
                                💰
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">
                                    সাশ্রয়ী বাজার
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                    খরচ কমান
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">

                        <Link
                            href="#সব-পণ্য"
                            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-600/25 transition duration-300 hover:-translate-y-1 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl"
                        >
                            সব পণ্যের দাম দেখুন
                            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>

                        <Link
                            href="/signin"
                            className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-6 py-4 font-bold text-emerald-800 transition duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:bg-emerald-50"
                        >
                            <span>👤</span>
                            অ্যাকাউন্ট খুলুন
                        </Link>
                    </div>

                    {/* Trust Message */}
                    <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-slate-500">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                            ✓
                        </span>
                        <p>
                            বাজার করার আগে দাম যাচাই করুন,
                            <span className="font-semibold text-emerald-700">
                                {" "}সঠিক সিদ্ধান্ত নিন।
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mx-auto w-full max-w-xl md:max-w-none">

                    {/* Image Glow */}
                    <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-300/50 via-lime-200/30 to-amber-200/50 blur-2xl" />

                    {/* Main Image Card */}
                    <div className="relative rounded-[2rem] border border-white bg-white p-2.5 shadow-2xl shadow-emerald-900/10 sm:p-3">
                        <div className="relative overflow-hidden rounded-[1.5rem]">
                            <Image
                                src="/banner.png"
                                alt="তাজা শাকসবজি, চাল, ডাল, মাছ ও নিত্যপ্রয়োজনীয় বাজারের পণ্য"
                                width={1536}
                                height={1024}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
                                <span className="inline-block rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/30 backdrop-blur-md">
                                    🌿 স্মার্ট বাজারের নতুন অভিজ্ঞতা
                                </span>

                                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                                    কম খরচে ভালো বাজার
                                </h2>

                                <p className="mt-2 text-sm text-white/85">
                                    দাম জেনে কিনুন, সাশ্রয়ে থাকুন।
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Price Card */}
                    <div className="absolute -bottom-6 left-2 max-w-[85%] rounded-2xl border border-emerald-100 bg-white p-3 shadow-xl sm:-left-6 sm:p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-lime-200 text-2xl">
                                🥬
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-500">
                                    আপনার বাজার, আপনার সিদ্ধান্ত
                                </p>
                                <p className="mt-1 text-sm font-extrabold text-emerald-700 sm:text-base">
                                    কেনার আগে দাম যাচাই করুন!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute -right-1 -top-5 rounded-2xl bg-gradient-to-r from-amber-300 to-yellow-400 px-4 py-3 text-sm font-extrabold text-amber-950 shadow-lg sm:-right-3">
                        ⭐ সাশ্রয়ী বাজার
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 md:pb-16">
                <div className="grid grid-cols-2 gap-3 rounded-3xl border border-white bg-white/85 p-4 shadow-xl shadow-emerald-900/5 backdrop-blur-xl sm:grid-cols-4 sm:gap-4 sm:p-6">

                    <div className="flex items-center gap-3 rounded-2xl bg-emerald-50/80 p-3 sm:p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl sm:h-12 sm:w-12">
                            🛍️
                        </div>
                        <div>
                            <p className="text-xl font-black text-emerald-700 sm:text-2xl">
                                500+
                            </p>
                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                                পণ্যের তথ্য
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-blue-50/80 p-3 sm:p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl sm:h-12 sm:w-12">
                            🏪
                        </div>
                        <div>
                            <p className="text-xl font-black text-blue-700 sm:text-2xl">
                                ৬৪
                            </p>
                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                                জেলার বাজার
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-amber-50/80 p-3 sm:p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-xl sm:h-12 sm:w-12">
                            🔄
                        </div>
                        <div>
                            <p className="text-base font-black text-amber-700 sm:text-xl">
                                প্রতিদিন
                            </p>
                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                                দাম যাচাই করুন
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-2xl bg-purple-50/80 p-3 sm:p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl sm:h-12 sm:w-12">
                            💚
                        </div>
                        <div>
                            <p className="text-base font-black text-purple-700 sm:text-xl">
                                সবার জন্য
                            </p>
                            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                                সহজ বাজার তথ্য
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
