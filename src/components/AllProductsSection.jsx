import { getProducts } from "../lib/api";
import ProductCard from "./ProductCard";

async function AllProductsSection() {
    // সব product আনবে
    const products = await getProducts();


    return (
        <section
            id="সব-পণ্য"
            className="container mx-auto px-4 py-10"
        >
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                সব পণ্য
            </h2>

            <p className="mb-6 text-sm text-base-content/60">
                আজকের বাজারদর দেখুন
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default AllProductsSection;