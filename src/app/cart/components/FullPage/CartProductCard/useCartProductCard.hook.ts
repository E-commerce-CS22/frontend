import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";

export const useProductCardHook = ({ id }) => {
  const { token } = useContext(UserContext);
  const [openEditQuantityDialog, setOpenEditQuantityDialog] = useState(false);
  const [quantity, setQuantity] = useState<string>("");

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
    mutate: modifyQuantity,
    isError: isErrorModifyingQuantity,
    isSuccess: isSuccessModifyingQuantity,
  } = useMutation({
    mutationFn: (quantityInput: { quantity: string }) => {
      return axios.patch(
        `${SERVER_URI}/api/carts/products/${id}`,
        quantityInput,
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

  const handleOpenQuantityDialog = () => {
    setOpenEditQuantityDialog(!openEditQuantityDialog);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleSendNewQuantity = () => {
    modifyQuantity({ quantity });
  };

  return {
    isSuccessDeletingProduct,
    isErrorDeletingProduct,
    isErrorAddToWishlist,
    isSuccessAddToWishlist,
    isErrorModifyingQuantity,
    isSuccessModifyingQuantity,
    openEditQuantityDialog,
    handleAddToFavorite,
    handleRemoveFromCart,
    handleCategoryProduct,
    handleOpenQuantityDialog,
    handleSendNewQuantity,
    handleChangeQuantity,
  };
};
