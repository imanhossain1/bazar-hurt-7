import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts } from "@/lib/api";

async function PriceTicker() {
    const productsData = await getProducts();

    return (
        <div className="overflow-hidden border-y border-base-300 bg-base-200 py-3">
            <MarqueeText>
                {productsData?.map((product) => (
                    <span
                        key={product.id}
                        className="mx-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm shadow-sm"
                    >
                        <span className="text-lg">
                            {product.categoryIcon}
                        </span>

                        <span className="font-semibold">
                            {product.nameBn}
                        </span>

                        <span className="font-bold text-primary">
                            {product.today} টাকা/{product.unit}
                        </span>

                        <span
                            className={
                                product.change.dir === "up"
                                    ? "font-bold text-green-600"
                                    : product.change.dir === "down"
                                    ? "font-bold text-red-600"
                                    : "font-bold text-base-content/60"
                            }
                        >
                            {product.change.dir === "up" && "▲"}
                            {product.change.dir === "down" && "▼"}
                            {product.change.dir === "flat" && "━"}
                            {" "}{product.change.pct}%
                        </span>
                    </span>
                ))}
            </MarqueeText>
        </div>
    );
}

export default PriceTicker;