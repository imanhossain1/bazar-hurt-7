
import Link from "next/link";

function Footer() {
    return (
        <footer className="mt-auto border-t border-base-300 bg-base-200 text-base-content">

            {/* Main Footer */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-3">

                {/* Brand */}
                <div>
                    <Link href="/" className="inline-flex items-center gap-2">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-2xl text-primary-content shadow-md">
                            🛒
                        </span>

                        <span className="text-2xl font-extrabold text-primary">
                            বাজার দর
                        </span>
                    </Link>

                    <p className="mt-4 max-w-xs text-sm leading-7 text-base-content/70">
                        নিত্যপ্রয়োজনীয় পণ্যের দাম জানুন সহজেই।
                        সঠিক তথ্যের মাধ্যমে আপনার বাজার হোক আরও সাশ্রয়ী।
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 text-base font-bold">
                        গুরুত্বপূর্ণ লিংক
                    </h3>

                    <ul className="space-y-3 text-sm text-base-content/70">
                        <li>
                            <Link href="/" className="transition-colors hover:text-primary">
                                হোম
                            </Link>
                        </li>

                        <li>
                            <Link href="/products" className="transition-colors hover:text-primary">
                                সকল পণ্য
                            </Link>
                        </li>

                        <li>
                            <Link href="/signin" className="transition-colors hover:text-primary">
                                লগইন
                            </Link>
                        </li>

                        <li>
                            <Link href="/signup" className="transition-colors hover:text-primary">
                                অ্যাকাউন্ট তৈরি করুন
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Disclaimer */}
                <div>
                    <h3 className="mb-4 text-base font-bold">
                        আমাদের সম্পর্কে
                    </h3>

                    <p className="text-sm leading-7 text-base-content/70">
                        বাজারদরের তথ্য আপনাকে সিদ্ধান্ত নিতে সাহায্য করে।
                        প্রদর্শিত দাম সম্ভাব্য এবং বাজার, স্থান ও সময় অনুযায়ী
                        পরিবর্তিত হতে পারে।
                    </p>

                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-3 py-2 text-xs text-base-content/70">
                        <span className="h-2 w-2 rounded-full bg-success"></span>
                        সাশ্রয়ী বাজারের পথে
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-base-300 bg-base-100">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-center text-xs text-base-content/60 sm:flex-row">

                    <p>
                        © {new Date().getFullYear()} বাজার দর। সর্বস্বত্ব সংরক্ষিত।
                    </p>

                    <p>
                        আপনার প্রতিদিনের বাজার, এখন আরও সহজ।
                    </p>

                </div>
            </div>

        </footer>
    );
}

export default Footer;
