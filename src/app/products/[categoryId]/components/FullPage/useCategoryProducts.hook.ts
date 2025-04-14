import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategoryProductsHook = ({
  categoryId,
}: {
  categoryId: string;
}) => {
  // const { id } = user;
  const fetchProducts = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/categories/${categoryId}/products`
    );
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["customerProducts"],
    queryFn: fetchProducts,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    products: products?.data,
  };
};
