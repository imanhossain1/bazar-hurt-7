
import { getProducts } from "../lib/api";
import ProductCard from "./ProductCard";

async function PriceDownSection() {
    // সব product আনবে
    const products = await getProducts();

    // শুধু দাম কমেছে এমন product নেবে
    const downPrice = products.filter(
        (product) => product.change.dir === "down"
    );

    // দাম কমার শতাংশ অনুযায়ী সাজিয়ে Top 6 নেবে
    const top6DownProducts = [...downPrice]
        .sort((a, b) => b.change.pct - a.change.pct)
        .slice(0, 6);

    return (
        <section className="container mx-auto px-4 py-10">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                আজ দাম কমেছে ▼
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {top6DownProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default PriceDownSection;
