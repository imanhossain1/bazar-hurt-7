
import Link from "next/link";

function ProductCard({ product }) {
    const todayPrice = product.today.toLocaleString("bn-BD");
    const changePercent = product.change.pct.toLocaleString("bn-BD");

    let changeText = `— ${changePercent}%`;
    let changeColor = "bg-slate-100 text-slate-700";

    if (product.change.dir === "up") {
        changeText = `▲ ${changePercent}%`;
        changeColor = "bg-emerald-100 text-emerald-700";
    }

    if (product.change.dir === "down") {
        changeText = `▼ ${changePercent}%`;
        changeColor = "bg-rose-100 text-rose-700";
    }

    let cardGradient = "from-orange-400 to-amber-500";
    let cardLight = "bg-orange-50";
    let cardText = "text-orange-700";
    let buttonGradient = "from-orange-500 to-red-500";

    if (product.categoryIcon === "🍚") {
        cardGradient = "from-orange-300 to-amber-500";
        cardLight = "bg-orange-50";
        cardText = "text-orange-700";
        buttonGradient = "from-orange-500 to-red-500";
    }

    if (product.categoryIcon === "🫘") {
        cardGradient = "from-lime-300 to-green-500";
        cardLight = "bg-green-50";
        cardText = "text-green-800";
        buttonGradient = "from-green-500 to-emerald-700";
    }

    if (product.categoryIcon === "🛢️") {
        cardGradient = "from-yellow-300 to-amber-500";
        cardLight = "bg-amber-50";
        cardText = "text-amber-800";
        buttonGradient = "from-amber-400 to-orange-500";
    }

    if (product.categoryIcon === "🥬") {
        cardGradient = "from-lime-300 to-green-500";
        cardLight = "bg-lime-50";
        cardText = "text-green-800";
        buttonGradient = "from-lime-500 to-green-700";
    }

    if (product.categoryIcon === "🐟") {
        cardGradient = "from-sky-400 to-blue-600";
        cardLight = "bg-blue-50";
        cardText = "text-blue-800";
        buttonGradient = "from-blue-500 to-blue-700";
    }

    if (product.categoryIcon === "🍗") {
        cardGradient = "from-rose-400 to-red-600";
        cardLight = "bg-rose-50";
        cardText = "text-red-800";
        buttonGradient = "from-rose-500 to-red-700";
    }

    if (product.categoryIcon === "🥛") {
        cardGradient = "from-purple-400 to-violet-600";
        cardLight = "bg-purple-50";
        cardText = "text-purple-800";
        buttonGradient = "from-purple-500 to-violet-700";
    }

    if (product.categoryIcon === "🌶️") {
        cardGradient = "from-orange-400 to-red-500";
        cardLight = "bg-orange-50";
        cardText = "text-red-700";
        buttonGradient = "from-orange-500 to-red-600";
    }

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group block h-full rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
            <article className={`flex h-full flex-col overflow-hidden rounded-3xl border border-base-300/50 ${cardLight} shadow-md shadow-base-content/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-base-content/20`}>

                {/* Colorful Product Header */}
                <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${cardGradient}`}>

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/20 blur-2xl" />

                    <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-white/20 blur-2xl" />

                    <span className="absolute left-4 top-4 rounded-xl border border-white/30 bg-black/10 px-3 py-1.5 text-sm font-bold text-white shadow-sm backdrop-blur-sm">
                        {product.nameBn}
                    </span>

                    <span className="relative text-8xl drop-shadow-lg transition-transform duration-300 group-hover:scale-125 group-hover:rotate-3">
                        {product.categoryIcon}
                    </span>

                    <span className="absolute bottom-3 right-3 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-md">
                        প্রতি {product.unit}
                    </span>
                </div>

                {/* Product Information */}
                <div className="flex flex-1 flex-col gap-4 p-4">

                    <div>
                        <h2 className={`text-xl font-extrabold ${cardText}`}>
                            {product.nameBn}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-slate-600">
                            প্রতি {product.unit} এর বাজারদর
                        </p>
                    </div>

                    <div className="h-px bg-slate-300/70" />

                    {/* Price and Change */}
                    <div className="flex items-center justify-between gap-2">

                        <div>
                            <p className="text-sm font-bold text-slate-600">
                                আজকের দাম
                            </p>

                            <p className={`mt-1 text-2xl font-black tracking-tight ${cardText}`}>
                                ৳{todayPrice}
                            </p>
                        </div>

                        <span className={`shrink-0 rounded-xl px-3 py-2 text-xs font-extrabold shadow-sm ${changeColor}`}>
                            {changeText}
                        </span>
                    </div>

                    {/* Gradient CTA */}
                    <div className={`mt-auto flex items-center justify-between rounded-xl bg-gradient-to-r ${buttonGradient} px-4 py-3 text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:brightness-110`}>
                        <span className="text-sm font-extrabold">
                            বিস্তারিত দেখুন
                        </span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-800 shadow-md transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </div>

                </div>
            </article>
        </Link>
    );
}

export default ProductCard;
