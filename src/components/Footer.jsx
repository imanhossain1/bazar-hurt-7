
function Footer() {
    return (
        <footer className="mt-auto border-t border-base-300 bg-base-100 px-4 py-6">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">

                {/* Left side */}
                <div className="text-center sm:text-left">
                    <h2 className="text-lg font-bold text-primary">
                        🛒 বাজার দর
                    </h2>

                    <p className="mt-1 text-sm text-base-content/70">
                        প্রয়োজনীয় পণ্যের দাম এক নজরে।
                    </p>
                </div>

                {/* Right side */}
                <p className="max-w-lg text-center text-xs leading-6 text-base-content/60 sm:text-right">
                    সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                </p>

            </div>
        </footer>
    );
}

export default Footer;
