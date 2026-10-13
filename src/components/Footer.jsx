function Footer() {
    return (
        <footer className="mt-auto border-t border-base-300 bg-base-100 px-4 py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
                <div className="text-center sm:text-left">
                    <h2 className="text-lg font-bold text-primary">
                        🛒 বাজার দর
                    </h2>

                    <p className="mt-1 text-sm text-base-content/70">
                        প্রতিদিনের বাজারদর, এক জায়গায়।
                    </p>
                </div>

                <p className="text-center text-xs text-base-content/60 sm:text-right">
                    © {new Date().getFullYear()} বাজার দর।
                    সর্বস্বত্ব সংরক্ষিত।
                </p>
            </div>
        </footer>
    );
}

export default Footer;