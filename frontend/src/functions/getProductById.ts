import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const getProductById = (id: string | number) =>{
    const { loading, error, data} = useQuery({
        queryKey: ['product'],
        queryFn: () =>
          axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
            return response.data
          })
    })

    const product = data

    return {
        loading, error, product
    }
}