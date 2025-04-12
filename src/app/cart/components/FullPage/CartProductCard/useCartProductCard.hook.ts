import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useProductCardHook = ({ id }) => {
  const { token } = useContext(UserContext);

  const {
    mutate,
    isError: isErrorAddToWishlist,
    isSuccess: isSuccessAddToWishlist,
  } = useMutation({
    mutationFn: () => {
      return axios.post(
        `${SERVER_URI}/api/wishlists/products/${id}`,
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
      return axios.delete(`${SERVER_URI}/api/carts/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const handleAddToFavorite = () => {
    mutate();
  };

  const handleCategoryProduct = () => {};

  const handleRemoveFromCart = () => {
    deleteProduct();
  };

  return {
    isSuccessDeletingProduct,
    isErrorDeletingProduct,
    isErrorAddToWishlist,
    isSuccessAddToWishlist,
    handleAddToFavorite,
    handleRemoveFromCart,
    handleCategoryProduct,
  };
};
