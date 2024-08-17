import { useProductsCategoriesQuery } from "@/hooks/useProductsCategoriesQuery";
import Error from "./error";

export default function ProductsCategories() {
    const { isFetching, error, categories } = useProductsCategoriesQuery();
    return (
        <div className='bg-white w-fit space-y-2.5 p-5'>
            {error && <Error error={error}/>}
            {isFetching && <p>Loading...</p>}
            <div className="category-nav">
                {
                    categories && categories.map((category) => (
                        <a href={`/categories/${category.slug}/`} key={category.name} className='font-semibold'> {category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}