
"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

function CategoryProductList({ products }) {
    const [sortOrder, setSortOrder] = useState("default");

    let sortedProducts = [...products];

    if (sortOrder === "low") {
        sortedProducts.sort(
            (a, b) => a.today - b.today
        );
    }

    if (sortOrder === "high") {
        sortedProducts.sort(
            (a, b) => b.today - a.today
        );
    }

    return (
        <section>
            {/* Section heading and sort control */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-extrabold">
                        সকল পণ্য
                    </h2>

                    <p className="mt-1 text-sm text-base-content/60">
                        আপনার পছন্দের পণ্য ও আজকের বাজারদর দেখুন
                    </p>
                </div>

                <label className="flex flex-col gap-2 sm:min-w-64">
                    <span className="text-sm font-semibold">
                        সাজান:
                    </span>

                    <select
                        value={sortOrder}
                        onChange={(event) =>
                            setSortOrder(event.target.value)
                        }
                        className="select select-bordered w-full rounded-xl bg-base-100"
                    >
                        <option value="default">
                            ডিফল্ট
                        </option>

                        <option value="low">
                            দাম: কম থেকে বেশি
                        </option>

                        <option value="high">
                            দাম: বেশি থেকে কম
                        </option>
                    </select>
                </label>
            </div>

            {/* Responsive product cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default CategoryProductList;
