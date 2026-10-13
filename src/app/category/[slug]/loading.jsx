
function CategoryLoading() {
    return (
        <main className="container mx-auto min-h-screen px-4 py-10">
            {/* Category title skeleton */}
            <div className="mb-8">
                <div className="skeleton mb-3 h-9 w-56"></div>
                <div className="skeleton h-4 w-72 max-w-full"></div>
            </div>

            {/* Sort control skeleton */}
            <div className="mb-6 flex justify-end">
                <div className="skeleton h-12 w-64 max-w-full rounded-xl"></div>
            </div>

            {/* Product cards skeleton */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-3xl border border-base-content/10 bg-base-100 p-3 shadow-sm"
                    >
                        {/* Emoji / image area */}
                        <div className="skeleton h-40 w-full rounded-2xl"></div>

                        <div className="space-y-4 p-3">
                            {/* Product name */}
                            <div className="skeleton h-5 w-3/4"></div>

                            {/* Unit */}
                            <div className="skeleton h-4 w-1/2"></div>

                            {/* Price and change badge */}
                            <div className="flex items-center justify-between gap-3">
                                <div className="skeleton h-7 w-28"></div>
                                <div className="skeleton h-7 w-20 rounded-full"></div>
                            </div>

                            {/* Details link */}
                            <div className="skeleton h-10 w-full rounded-xl"></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default CategoryLoading;
