import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCategoriesProductsQuery = (categoryName) => {
    const { isFetching, error, data } = useQuery({
        queryKey: ['category-products'],
        queryFn: () =>
          axios.get(`https://dummyjson.com/products/category/${categoryName}`).then((response) => {
            return response.data.products
          })
    })

    const category_products = data;

    return {
        isFetching,
        error, 
        category_products
    }
}
