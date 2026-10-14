
import Link from "next/link";

function ProductCard({ product }) {
    const todayPrice = product.today.toLocaleString("bn-BD");
    const changePercent = product.change.pct.toLocaleString("bn-BD");

    let changeText = `— ${changePercent}%`;
    let changeColor =
        "border-base-300 bg-base-200 text-base-content/70";

    if (product.change.dir === "up") {
        changeText = `▲ ${changePercent}%`;
        changeColor =
            "border-emerald-200 bg-emerald-50 text-emerald-600";
    }

    if (product.change.dir === "down") {
        changeText = `▼ ${changePercent}%`;
        changeColor =
            "border-red-200 bg-red-50 text-red-600";
    }

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.16)]">

                {/* Product Image */}
                <div className="relative mx-3 mt-3 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-base-200/70">

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative text-7xl transition-transform duration-300 ease-out group-hover:scale-110">
                        {product.categoryIcon}
                    </span>

                    <span className="absolute bottom-2.5 right-2.5 rounded-lg border border-base-300/70 bg-base-100/95 px-3 py-1.5 text-xs font-semibold text-base-content/70 shadow-sm">
                        {product.unit}
                    </span>
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col gap-4 p-4">

                    <div>
                        <h2 className="text-lg font-bold text-base-content transition-colors duration-200 group-hover:text-primary">
                            {product.nameBn}
                        </h2>

                        <p className="mt-1 text-sm text-base-content/60">
                            প্রতি {product.unit}
                        </p>
                    </div>

                    <div className="h-px bg-base-300/70" />

                    {/* Price and Change */}
                    <div className="flex items-end justify-between gap-2">
                        <div>
                            <p className="text-xs font-medium text-base-content/60">
                                আজকের দাম
                            </p>

                            <p className="mt-1 text-2xl font-extrabold tracking-tight text-primary">
                                {todayPrice}
                                <span className="ml-1 text-sm font-semibold">
                                    টাকা
                                </span>
                            </p>
                        </div>

                        <span
                            className={`inline-flex shrink-0 items-center rounded-lg border px-2.5 py-1.5 text-xs font-bold ${changeColor}`}
                        >
                            {changeText}
                        </span>
                    </div>

                    {/* Details Button Style */}
                    <div className="mt-auto flex items-center justify-between rounded-xl border border-base-300/70 bg-base-200/40 px-3.5 py-3 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5">
                        <span className="text-sm font-semibold text-base-content/75 transition-colors group-hover:text-primary">
                            বিস্তারিত দেখুন
                        </span>

                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-base-100 text-lg text-primary shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-content">
                            →
                        </span>
                    </div>

                </div>
            </article>
        </Link>
    );
}

export default ProductCard;
