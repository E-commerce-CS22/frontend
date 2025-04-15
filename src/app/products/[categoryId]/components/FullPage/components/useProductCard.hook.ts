import { UserContext } from "@/shared/common/authentication";
import { cartInputType } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const useProductCardHook = ({ id }) => {
  const { token, isAuthenticated } = useContext(UserContext);

  const router = useRouter();
  const pathname = usePathname();
  const [productQuantity, setProductQuantity] = useState(1);

  const {
    mutate,
    isError: isErrorAddToWishlist,
    isSuccess: isSuccessAddToWishlist,
    isPending: isLoadingADDToWishlist,
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
    mutate: addToCard,
    isSuccess,
    isError,
    isPending: isLoading,
  } = useMutation({
    mutationFn: (cartInput: cartInputType) => {
      return axios.post(`${SERVER_URI}/api/carts/products`, cartInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const handleIncreaseQuantity = () => {
    setProductQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setProductQuantity((prev) => prev - 1);
  };

  const handleCategoryProduct = () => {
    router.push(`${pathname}/${id}`);
  };

  const handleAddToFavorite = () => {
    mutate();
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      addToCard({
        product_id: id,
        quantity: productQuantity,
      });
    }
  };

  return {
    isSuccess,
    isError,
    isLoading,
    isLoadingADDToWishlist,
    isErrorAddToWishlist,
    isSuccessAddToWishlist,
    productQuantity,
    handleCategoryProduct,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToFavorite,
    handleAddToCart,
  };
};
