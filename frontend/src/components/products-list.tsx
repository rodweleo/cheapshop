import ProductCard from "./product-card";

export default function ProductsList({ products}){
    return <ul className="flex flex-wrap gap-5">
        {
            products.map((product) => (
                <li key={product.title}>
                    <ProductCard product={product}/>
                </li>
            ))
        }
    </ul>
}