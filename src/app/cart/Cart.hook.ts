import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useCartHook = () => {
  const { token } = useContext(UserContext);

  const fetchCategories = async () => {
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
    data: cartData,
  } = useQuery({
    queryKey: ["adminCategories"],
    queryFn: fetchCategories,
    enabled: !!token,
  });
  return {
    isLoading,
    isSuccess,
    isError,
    cartData,
  };
};
