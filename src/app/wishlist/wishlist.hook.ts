import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const useWishlistHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token, user } = useContext(UserContext);
  const {
    customer: { wishlist_id: wishlistId },
  } = user;
  const fetchWishlist = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/wishlists/${wishlistId}/products`,
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
    data: wishlistData,
  } = useQuery({
    queryKey: ["customerWishlist"],
    queryFn: fetchWishlist,
    enabled: !!token,
  });

  const { mutate } = useMutation({
    mutationFn: ({
      wishlistId,
      productId,
    }: {
      wishlistId: string;
      productId: string;
    }) => {
      return axios.delete(
        `${SERVER_URI}/api/wishlists/${wishlistId}/products/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const handleNavigateToNewPage = () => {
    router.push("wishlist/new");
  };

  const tableActionButtons = [
    {
      title: t("Create favorite"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  const handleDeleteWishlist = (wishlistId, productId) => {
    mutate({ wishlistId, productId });
  };

  return {
    isLoading,
    isError,
    isSuccess,
    wishlistData,
    tableActionButtons,
    handleDeleteWishlist,
  };
};
