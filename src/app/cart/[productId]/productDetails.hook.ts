import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const useProductDetailsHook = ({ productId }) => {
  const { token, user } = useContext(UserContext);
  const {
    customer_data: { wishlist_id: wishlistId },
  } = user;

  const router = useRouter();

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

  const {
    mutate: deleteProduct,
    isSuccess: isSuccessDeletingProduct,
    isError: isErrorDeletingProduct,
  } = useMutation({
    mutationFn: () => {
      return axios.delete(`${SERVER_URI}/api/carts/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const handleAddToFavorite = () => {
    mutate();
  };

  const handleRemoveFromCart = () => {
    deleteProduct();
  };

  const handleGoBack = () => {
    router.back();
  };

  return {
    isLoading,
    isSuccess,
    isError,
    isSuccessDeletingProduct,
    isErrorDeletingProduct,
    error,
    productData: productData,
    handleAddToFavorite,
    handleGoBack,
    handleRemoveFromCart,
  };
};
