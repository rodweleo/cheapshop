import ProductCard from "@/components/product-card"
import { useCategoriesProductsQuery } from "@/hooks/useCategoriesProductsQuery"
import { useParams } from "react-router-dom"

export default function CategoryPage () {
    const { id } = useParams()
    const { isFetching, category_products} = useCategoriesProductsQuery(id)

    return <section className="w-full h-full">
        {isFetching && <div>Loading...</div>}
        <ul className="flex flex-wrap gap-5">
            {category_products && category_products.map((product) => (
                <li key={product.title}>
                    <a href={`/products/${encodeURIComponent(product.title.concat("_", product.id))}`}><ProductCard product={product}/></a>
                </li>
            ))}
        </ul>
    </section>
}