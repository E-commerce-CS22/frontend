import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export const useWishlistHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token, user } = useContext(UserContext);
  const { id } = user;
  const fetchWishlist = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/wishlists/${id}/products`,
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

  const handleNavigateToNewPage = () => {
    router.push("wishlist/new");
  };

  const tableActionButtons = [
    {
      title: t("Create favorite"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    isLoading,
    isError,
    isSuccess,
    wishlistData,
    tableActionButtons,
  };
};
