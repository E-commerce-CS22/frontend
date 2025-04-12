import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useWishlistHook = () => {
  const { token } = useContext(UserContext);

  const fetchWishlist = async () => {
    const response = await axios.get(`${SERVER_URI}/api/wishlists/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

  return {
    isLoading,
    isError,
    isSuccess,
    wishlistData,
  };
};
