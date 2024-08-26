import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductQuery = (id: string | number) => {
  const { loading, error, data } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
        return response.data;
      }),
    refetchInterval: 2000,
  });

  const product = data;

  return {
    loading,
    error,
    product,
  };
};
