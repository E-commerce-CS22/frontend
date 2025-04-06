import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useProductsHook = () => {
  // const { t } = useTranslation("Store");
  // const router = useRouter();

  const { token } = useContext(UserContext);
  // const { id } = user;
  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/customer/products`, {
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
    data: productsData,
  } = useQuery({
    queryKey: ["customerProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    productsData: productsData,
  };
};
