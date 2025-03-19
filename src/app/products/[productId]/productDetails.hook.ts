import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useProductDetailsHook = ({ productId }) => {
  const { token, user } = useContext(UserContext);
  const {
    customer: { wishlist_id: wishlistId },
  } = user;

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

  const { mutate } = useMutation({
    mutationFn: () => {
      return axios.post(
        `${SERVER_URI}/api/wishlists/${wishlistId || 0}/products/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const handleAddToWishlist = () => {
    mutate();
  };
  const handleAddToCart = () => {};

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    productData: productData?.data,
    handleAddToCart,
    handleAddToWishlist,
  };
};
