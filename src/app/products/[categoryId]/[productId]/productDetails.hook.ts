import { UserContext } from "@/shared/common/authentication";
import { cartInputType } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export const useProductDetailsHook = ({ productId }) => {
  const { token, user, isAuthenticated } = useContext(UserContext);
  const customer_data = user?.customer_data;
  const wishlistId = customer_data?.wishlist_id;

  const router = useRouter();

  const [productQuantity, setProductQuantity] = useState(1);

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

  const { mutate: addToCard } = useMutation({
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

  const handleAddToFavorite = () => {
    mutate();
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      addToCard({
        product_id: productId,
        quantity: productQuantity,
      });
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return {
    isLoading,
    isSuccess,
    isError,
    error,
    productQuantity,
    productData: productData?.data,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleAddToFavorite,
    handleAddToCart,
    handleGoBack,
  };
};
