import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useCartProductsHook = () => {
  const { token } = useContext(UserContext);
  // const { id } = user;
  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/carts/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: products,
  } = useQuery({
    queryKey: ["customerCartProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    products: products,
  };
};
