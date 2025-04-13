import { UserContext } from "@/shared/common/authentication";
import { cartInputType } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
// import { usePathname } from "next/navigation";
// import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const useProductCardHook = ({ id }) => {
  const { token } = useContext(UserContext);

  // const router = useRouter();
  // const pathname = usePathname();
  const [productQuantity, setProductQuantity] = useState(1);

  const {
    mutate: addToCard,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (cartInput: cartInputType) => {
      return axios.post(`${SERVER_URI}/api/carts/products`, cartInput, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const { mutate } = useMutation({
    mutationFn: ({ productId }: { productId: string }) => {
      return axios.delete(`${SERVER_URI}/api/wishlists/products/${productId}`, {
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

  const handleAddToCart = () => {
    addToCard({
      product_id: id,
      quantity: productQuantity,
    });
  };

  const handleDeleteFromFavorite = () => {
    mutate({ productId: id });
  };

  return {
    isSuccess,
    isError,
    productQuantity,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToCart,
    handleDeleteFromFavorite,
  };
};
