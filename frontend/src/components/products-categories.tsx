import { useProductsCategoriesQuery } from "@/hooks/useProductsCategoriesQuery";
import { CategoryProps } from "@/utils/types";

export default function ProductsCategories() {
    const { isFetching, error, categories } = useProductsCategoriesQuery();
    return (
        <div className='bg-white w-full space-y-2.5 p-5  rounded-md drop-shadow-xl'>
            {error && <p>Something went wrong: {error.message}</p>}
            {isFetching && <p>Loading...</p>}
            <div className="category-nav h-full max-w-[300px]">
                {
                    categories && categories.map((category: CategoryProps) => (
                        <a href={`/categories/${category.slug}/`} key={category.name} className='font-semibold'> {category.name}</a>
                    ))
                }
            </div>
        </div>
    )
}