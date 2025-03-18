import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useProductDetailsHook = ({ productId }) => {
  const { token } = useContext(UserContext);

  const fetchProduct = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/customer/products/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: productData,
    error,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: fetchProduct,
    enabled: !!token,
  });

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    productData: productData?.data,
  };
};
