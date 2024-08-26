import { ProductProps } from "@/utils/interfaces";
import ProductCard from "./product-card";

export default function ProductsList({ products }: {
    products: ProductProps[]
}) {
    return <ul className="flex gap-3">
        {
            products.map((product) => (
                <li key={product.title}>
                    <ProductCard product={product} />
                </li>
            ))
        }
    </ul>
}