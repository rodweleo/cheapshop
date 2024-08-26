import { CategoryProps } from "@/utils/types"

export const CategoryCard = ({category}: {
    category: CategoryProps
}) => {
    return <div>
        <img src={category.url} loading="lazy" alt={category.name}/>
        <h1>{category.name}</h1>
    </div>
}