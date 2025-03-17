import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useWishlistHook = () => {
  // const { t } = useTranslation("Store");
  // const router = useRouter();

  const { token, user } = useContext(UserContext);
  const { id } = user;
  const fetchCategories = async () => {
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
    queryKey: ["adminCategories"],
    queryFn: fetchCategories,
    enabled: !!token,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    wishlistData,
  };
};
