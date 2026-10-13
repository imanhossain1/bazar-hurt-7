
function ProductDetailsLoading() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-base-200 via-base-100 to-primary/5 px-4 py-8 md:px-8 md:py-12">
            <div className="mx-auto max-w-6xl space-y-8">

                {/* Back link skeleton */}
                <div className="skeleton h-5 w-40"></div>

                {/* Product summary skeleton */}
                <section className="rounded-3xl border border-base-content/10 bg-base-100/80 p-6 shadow-xl md:p-10">
                    <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-center">
                        <div className="skeleton h-48 w-full rounded-3xl md:h-52"></div>

                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <div className="skeleton h-7 w-20 rounded-full"></div>
                                <div className="skeleton h-7 w-28 rounded-full"></div>
                            </div>

                            <div className="skeleton h-10 w-3/4 max-w-sm"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-5/6"></div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <div className="skeleton h-10 w-36 rounded-full"></div>
                                <div className="skeleton h-8 w-40"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price summary skeleton */}
                <section>
                    <div className="mb-5 space-y-3">
                        <div className="skeleton h-8 w-64 max-w-full"></div>
                        <div className="skeleton h-4 w-80 max-w-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm"
                            >
                                <div className="flex justify-between">
                                    <div className="skeleton h-5 w-28"></div>
                                    <div className="skeleton h-8 w-8 rounded-full"></div>
                                </div>

                                <div className="skeleton mt-5 h-9 w-36"></div>
                                <div className="skeleton mt-3 h-4 w-40"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Price history skeleton */}
                <section className="rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm md:p-8">
                    <div className="skeleton mb-3 h-8 w-52 max-w-full"></div>
                    <div className="skeleton mb-6 h-4 w-72 max-w-full"></div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-base-200/70 p-5"
                            >
                                <div className="skeleton h-4 w-20"></div>
                                <div className="skeleton mt-4 h-7 w-32"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Market prices skeleton */}
                <section>
                    <div className="mb-5 space-y-3">
                        <div className="skeleton h-8 w-80 max-w-full"></div>
                        <div className="skeleton h-4 w-72 max-w-full"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm"
                            >
                                <div className="flex justify-between gap-3">
                                    <div className="space-y-3">
                                        <div className="skeleton h-6 w-36"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                    </div>

                                    <div className="skeleton h-7 w-28 rounded-full"></div>
                                </div>

                                <div className="my-5 h-px bg-base-content/10"></div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="rounded-2xl bg-base-200/70 p-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton mt-3 h-7 w-24"></div>
                                    </div>

                                    <div className="rounded-2xl bg-base-200/70 p-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton mt-3 h-7 w-24"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Back button skeleton */}
                <div className="flex justify-center pt-2">
                    <div className="skeleton h-12 w-48 rounded-2xl"></div>
                </div>
            </div>
        </main>
    );
}

export default ProductDetailsLoading;
