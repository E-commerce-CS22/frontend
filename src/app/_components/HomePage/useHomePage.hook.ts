import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const useHomePageHook = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();
  // const { id } = user;
  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/products`, {
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
    data: products,
  } = useQuery({
    queryKey: ["customerProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  const handleOpenCategoryProducts = () => {
    router.push("/products");
  };

  return {
    isLoading,
    isError,
    isSuccess,
    products: products?.data,
    handleOpenCategoryProducts,
  };
};
