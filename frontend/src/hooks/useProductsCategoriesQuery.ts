import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useProductsCategoriesQuery = () => {
    const { isFetching, error, data } = useQuery({
        queryKey: ['products-categories'],
        queryFn: () =>
          axios.get('https://dummyjson.com/products/categories').then((response) => {
            return response.data
          })
    })

    const categories = data;

    return {
        isFetching,
        error, 
        categories
    }
}
