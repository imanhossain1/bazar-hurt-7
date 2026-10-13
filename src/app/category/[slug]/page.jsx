
import Link from "next/link";
import { getCategories, getCategoryProducts } from "../../../lib/api";
import CategoryProductList from "../../../components/CategoryProductList";


async function CategoryDetailsPage({ params }) {
    const { slug } = await params;

    const categories = await getCategories();

    const category = categories.find(
        (item) => item.slug === slug
    );

    // Category না থাকলে empty state দেখাবে
    if (!category) {
        return (
            <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
                <div className="w-full max-w-md rounded-3xl border border-base-content/10 bg-base-100 p-8 text-center shadow-xl">
                    <div className="text-7xl">🔎</div>

                    <h1 className="mt-5 text-2xl font-extrabold">
                        ক্যাটাগরি পাওয়া যায়নি!
                    </h1>

                    <p className="mt-3 text-base-content/60">
                        দুঃখিত, এই ক্যাটাগরিটি খুঁজে পাওয়া যায়নি।
                    </p>

                    <Link
                        href="/"
                        className="btn btn-primary mt-6 rounded-xl"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </main>
        );
    }

    // নির্দিষ্ট category-র সব product আনবে
    const products = await getCategoryProducts(slug);

    return (
        <main className="min-h-screen bg-gradient-to-b from-primary/5 via-base-100 to-base-200/40">
            <div className="container mx-auto px-4 py-10 md:py-14">

                {/* Category heading */}
                <section className="relative mb-8 overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-lg md:p-10">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

                    <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/15 text-6xl shadow-inner">
                            {category.icon}
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-primary">
                                বাজার দর · ক্যাটাগরি
                            </p>

                            <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
                                {category.nameBn}
                            </h1>

                            <p className="mt-3 leading-7 text-base-content/60">
                                {category.nameBn} বিভাগের সব পণ্যের
                                আজকের দাম, দাম বাড়া-কমার তথ্য ও
                                বাজারদর এক জায়গায় দেখুন।
                            </p>

                            <div className="mt-4">
                                <span className="badge badge-primary badge-lg">
                                    মোট পণ্য: {products.length.toLocaleString("bn-BD")}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product list and sorting */}
                {products.length === 0 ? (
                    <section className="rounded-3xl border border-base-content/10 bg-base-100 px-6 py-14 text-center shadow-sm">
                        <div className="text-6xl">🧺</div>

                        <h2 className="mt-5 text-2xl font-bold">
                            এই ক্যাটাগরিতে কোনো পণ্য নেই
                        </h2>

                        <p className="mx-auto mt-3 max-w-md text-base-content/60">
                            এই মুহূর্তে এই ক্যাটাগরির কোনো পণ্যের তথ্য
                            পাওয়া যায়নি। অন্য পণ্যগুলো দেখতে হোম পেজে ফিরে যান।
                        </p>

                        <Link
                            href="/"
                            className="btn btn-primary mt-6 rounded-xl"
                        >
                            ← হোম পেজে ফিরে যান
                        </Link>
                    </section>
                ) : (
                    <CategoryProductList products={products} />
                )}
            </div>
        </main>
    );
}

export default CategoryDetailsPage;
