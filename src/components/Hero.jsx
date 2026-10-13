import Image from "next/image";

function Hero() {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
            {/* Left Side: Text */}
            <div>
                <p className="mb-3 font-semibold text-primary">
                    🇧🇩 বাংলাদেশের প্রতিদিনের বাজারদর
                </p>

                <h1 className="text-3xl font-extrabold leading-tight sm:text-5xl">
                    সঠিক বাজারদর জানুন,
                    <span className="text-primary"> সাশ্রয়ী বাজার করুন</span>
                </h1>

                <p className="mt-5 max-w-lg leading-7 text-base-content/70">
                    চাল, ডাল, তেল, মাছ, মাংসসহ নিত্যপ্রয়োজনীয় পণ্যের
                    দাম জানুন এক জায়গায়। বাজার করার আগে দেখে নিন
                    আজকের দাম।
                </p>

                <a
                    href="#সব-পণ্য"
                    className="btn btn-primary mt-6"
                >
                    সব পণ্যের দাম দেখুন
                    <span aria-hidden="true"> →</span>
                </a>
            </div>

            {/* Right Side: Hero Image */}
            <div className="relative">
                <Image
                    src="/banner.jpg"
                    alt="তাজা শাকসবজি ও নিত্যপ্রয়োজনীয় বাজারের পণ্য"
                    width={700}
                    height={500}
                    priority
                    className="h-auto w-full rounded-2xl object-cover"
                />
            </div>
        </section>
    );
}

export default Hero;