
import Link from "next/link";

function ProductCard({ product }) {
    const todayPrice = product.today.toLocaleString("bn-BD");
    const changePercent = product.change.pct.toLocaleString("bn-BD");

    let changeText = `— ${changePercent}%`;
    let changeColor =
        "border-base-content/10 bg-base-200/70 text-base-content/70";

    if (product.change.dir === "up") {
        changeText = `▲ ${changePercent}%`;
        changeColor =
            "border-emerald-500/20 bg-emerald-500/10 text-emerald-600";
    }

    if (product.change.dir === "down") {
        changeText = `▼ ${changePercent}%`;
        changeColor =
            "border-red-500/20 bg-red-500/10 text-red-600";
    }

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <article className="relative h-full overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-lg shadow-base-content/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 dark:border-white/10 dark:bg-base-200/50">
                {/* Soft decorative glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-all duration-300 group-hover:bg-primary/20" />

                {/* Product Emoji */}
                <div className="relative mx-3 mt-3 flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-white/50 bg-gradient-to-br from-primary/10 via-base-100/60 to-secondary/10 dark:border-white/10">
                    <span className="text-7xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        {product.categoryIcon}
                    </span>

                    <span className="absolute bottom-3 right-3 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-medium text-base-content/70 backdrop-blur-md dark:border-white/10 dark:bg-base-300/70">
                        {product.unit}
                    </span>
                </div>

                {/* Product Details */}
                <div className="relative flex flex-col gap-4 p-5">
                    <div>
                        <h2 className="text-lg font-bold transition-colors group-hover:text-primary">
                            {product.nameBn}
                        </h2>

                        <p className="mt-1 text-sm text-base-content/60">
                            প্রতি {product.unit}
                        </p>
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-base-content/15 to-transparent" />

                    {/* Price and Change */}
                    <div className="flex items-end justify-between gap-2">
                        <div>
                            <p className="text-xs font-medium text-base-content/60">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-xl font-extrabold tracking-tight text-primary">
                                {todayPrice}
                                <span className="ml-1 text-sm font-semibold">
                                    টাকা
                                </span>
                            </p>
                        </div>

                        <span
                            className={`inline-flex shrink-0 items-center rounded-full border px-3 py-1.5 text-xs font-bold backdrop-blur-md ${changeColor}`}
                        >
                            {changeText}
                        </span>
                    </div>

                    {/* Detail Link Hint */}
                    <div className="flex items-center justify-between rounded-xl border border-base-content/5 bg-base-200/40 px-3 py-2.5 transition-colors group-hover:border-primary/20 group-hover:bg-primary/5">
                        <span className="text-sm font-medium text-base-content/70">
                            বিস্তারিত দেখুন
                        </span>

                        <span className="text-lg text-primary transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default ProductCard;
