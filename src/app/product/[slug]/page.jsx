
import Link from "next/link";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
import { getProducts } from "../../../lib/api";
// import { auth } from "../../../lib/auth";

async function ProductDetailsPage({ params }) {

    // লগইন করা আছে কি না চেক করবে
    // const session = await auth.api.getSession({
    //     headers: await headers(),
    // });

    // if (!session) {
    //     redirect("/signin");
    // }

    // URL থেকে slug আনবে
    const { slug } = await params;

    // সব product আনবে
    const products = await getProducts();

    // slug দিয়ে নির্দিষ্ট product খুঁজবে
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        return (
            <main className="flex min-h-screen items-center justify-center p-6">
                <div className="rounded-3xl border border-base-content/10 bg-base-100 p-10 text-center shadow-xl">
                    <p className="text-6xl">🔎</p>
                    <h1 className="mt-4 text-2xl font-bold">
                        পণ্য পাওয়া যায়নি!
                    </h1>
                    <Link href="/" className="btn btn-primary mt-6">
                        ← সব পণ্য দেখুন
                    </Link>
                </div>
            </main>
        );
    }

    // বাজারের সর্বনিম্ন ও সর্বোচ্চ দাম বের করবে
    const markets = product.markets || [];

    const minPrice = markets.length
        ? Math.min(...markets.map((market) => market.min))
        : 0;

    const maxPrice = markets.length
        ? Math.max(...markets.map((market) => market.max))
        : 0;

    // প্রতিটি বাজারের সর্বনিম্ন ও সর্বোচ্চ দামের গড় বের করবে
    const avgPrice = markets.length
        ? Math.round(
              markets.reduce(
                  (total, market) =>
                      total + (market.min + market.max) / 2,
                  0
              ) / markets.length
          )
        : 0;

    // বাংলা সংখ্যায় দাম দেখাবে
    const formatPrice = (price) =>
        price.toLocaleString("bn-BD");

    const changePercent = product.change.pct.toLocaleString("bn-BD");

    let changeText = "— দাম অপরিবর্তিত";
    let changeColor = "text-base-content/60 bg-base-200";

    if (product.change.dir === "up") {
        changeText = "▲ দাম বেড়েছে";
        changeColor = "text-error bg-error/10";
    }

    if (product.change.dir === "down") {
        changeText = "▼ দাম কমেছে";
        changeColor = "text-success bg-success/10";
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-primary/5 px-4 py-8 md:px-8 md:py-12">
            <div className="mx-auto max-w-6xl space-y-8">

                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
                >
                    <span>←</span>
                    <span>সব পণ্যে ফিরে যান</span>
                </Link>

                {/* Product summary */}
                <section className="relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-100/80 p-6 shadow-xl shadow-base-content/5 backdrop-blur-xl md:p-10">
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative grid gap-8 md:grid-cols-[200px_1fr] md:items-center">
                        <div className="flex h-48 items-center justify-center rounded-3xl border border-base-content/5 bg-gradient-to-br from-primary/10 via-base-200/60 to-secondary/10 md:h-52">
                            <span className="text-8xl">
                                {product.categoryIcon}
                            </span>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-2">
                                <span className="badge badge-primary badge-lg">
                                    {product.categoryNameBn}
                                </span>

                                <span className="badge badge-outline badge-lg">
                                    প্রতি {product.unit}
                                </span>
                            </div>

                            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                                {product.nameBn}
                            </h1>

                            <p className="mt-3 leading-7 text-base-content/65">
                                বিভিন্ন বাজারে {product.nameBn}-এর
                                আজকের দাম, সর্বনিম্ন ও সর্বোচ্চ মূল্য
                                এবং আগের দিনের দামের পরিবর্তন দেখুন।
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                <span
                                    className={`rounded-full px-4 py-2 text-sm font-bold ${changeColor}`}
                                >
                                    {changeText} ({changePercent}%)
                                </span>

                                <span className="text-sm text-base-content/60">
                                    আজকের দাম:{" "}
                                    <strong className="text-lg text-primary">
                                        {formatPrice(product.today)} টাকা
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price summary */}
                <section>
                    <div className="mb-5">
                        <h2 className="text-2xl font-extrabold md:text-3xl">
                            আজকের দামের সারাংশ
                        </h2>

                        <p className="mt-2 text-sm text-base-content/60">
                            বিভিন্ন বাজারের দামের তুলনামূলক চিত্র
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-3xl border border-success/20 bg-success/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-base-content/70">
                                    সর্বনিম্ন দাম
                                </p>
                                <span className="text-2xl">📉</span>
                            </div>

                            <p className="mt-4 text-3xl font-extrabold text-success">
                                {formatPrice(minPrice)}
                                <span className="ml-2 text-base font-semibold">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-2 text-xs text-base-content/55">
                                বাজারগুলোর মধ্যে সবচেয়ে কম
                            </p>
                        </div>

                        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-base-content/70">
                                    গড় দাম
                                </p>
                                <span className="text-2xl">📊</span>
                            </div>

                            <p className="mt-4 text-3xl font-extrabold text-primary">
                                {formatPrice(avgPrice)}
                                <span className="ml-2 text-base font-semibold">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-2 text-xs text-base-content/55">
                                বাজারগুলোর দামের আনুমানিক গড়
                            </p>
                        </div>

                        <div className="rounded-3xl border border-error/20 bg-error/5 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="flex items-center justify-between">
                                <p className="font-medium text-base-content/70">
                                    সর্বোচ্চ দাম
                                </p>
                                <span className="text-2xl">📈</span>
                            </div>

                            <p className="mt-4 text-3xl font-extrabold text-error">
                                {formatPrice(maxPrice)}
                                <span className="ml-2 text-base font-semibold">
                                    টাকা
                                </span>
                            </p>

                            <p className="mt-2 text-xs text-base-content/55">
                                বাজারগুলোর মধ্যে সবচেয়ে বেশি
                            </p>
                        </div>
                    </div>
                </section>

                {/* Price history */}
                <section className="rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm md:p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-extrabold">
                            🗓️ দামের ইতিহাস
                        </h2>

                        <p className="mt-2 text-sm text-base-content/60">
                            আগের সময়ের সঙ্গে আজকের দামের তুলনা করুন।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl bg-base-200/70 p-5">
                            <p className="text-sm text-base-content/60">
                                গতকাল
                            </p>
                            <p className="mt-2 text-xl font-bold">
                                {formatPrice(product.yesterday)} টাকা
                            </p>
                        </div>

                        <div className="rounded-2xl bg-base-200/70 p-5">
                            <p className="text-sm text-base-content/60">
                                গত সপ্তাহ
                            </p>
                            <p className="mt-2 text-xl font-bold">
                                {formatPrice(product.lastWeek)} টাকা
                            </p>
                        </div>

                        <div className="rounded-2xl bg-base-200/70 p-5">
                            <p className="text-sm text-base-content/60">
                                গত মাস
                            </p>
                            <p className="mt-2 text-xl font-bold">
                                {formatPrice(product.lastMonth)} টাকা
                            </p>
                        </div>
                    </div>
                </section>

                {/* Market prices */}
                <section>
                    <div className="mb-5">
                        <h2 className="text-2xl font-extrabold md:text-3xl">
                            🏪 বাজারভিত্তিক আজকের দাম
                        </h2>

                        <p className="mt-2 text-sm text-base-content/60">
                            বিভিন্ন বাজারের সর্বনিম্ন ও সর্বোচ্চ দাম
                        </p>
                    </div>

                    {markets.length === 0 ? (
                        <div className="rounded-2xl bg-base-100 p-8 text-center text-base-content/60">
                            এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            {markets.map((market) => (
                                <article
                                    key={market.market}
                                    className="group rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                🏪 {market.market}
                                            </h3>

                                            <p className="mt-2 text-sm text-base-content/60">
                                                📍 {market.division}
                                            </p>
                                        </div>

                                        {market.min === minPrice && (
                                            <span className="shrink-0 rounded-full bg-success/10 px-3 py-1.5 text-xs font-bold text-success">
                                                সবচেয়ে কম দাম
                                            </span>
                                        )}
                                    </div>

                                    <div className="my-5 h-px bg-base-content/10" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="rounded-2xl bg-success/5 p-4">
                                            <p className="text-sm text-base-content/60">
                                                সর্বনিম্ন
                                            </p>

                                            <p className="mt-2 text-xl font-extrabold text-success">
                                                {formatPrice(market.min)}
                                                <span className="ml-1 text-sm">
                                                    টাকা
                                                </span>
                                            </p>
                                        </div>

                                        <div className="rounded-2xl bg-error/5 p-4">
                                            <p className="text-sm text-base-content/60">
                                                সর্বোচ্চ
                                            </p>

                                            <p className="mt-2 text-xl font-extrabold text-error">
                                                {formatPrice(market.max)}
                                                <span className="ml-1 text-sm">
                                                    টাকা
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </section>

                {/* Back to products */}
                <div className="flex justify-center pt-2">
                    <Link
                        href="/"
                        className="btn btn-primary btn-lg rounded-2xl px-8"
                    >
                        ← সব পণ্য দেখুন
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default ProductDetailsPage;
