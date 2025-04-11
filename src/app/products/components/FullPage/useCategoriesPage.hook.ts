import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useCategoriesHook = () => {
  // const { t } = useTranslation("Store");
  // const router = useRouter();

  const { token } = useContext(UserContext);
  // const { id } = user;
  const fetchCategories = async () => {
    const response = await axios.get(`${SERVER_URI}/api/categories`, {
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
    data: categoriesData,
  } = useQuery({
    queryKey: ["customerCategories"],
    queryFn: fetchCategories,
    enabled: !!token,
  });

  return {
    isLoading,
    isError,
    isSuccess,
    categoriesData: categoriesData?.data,
  };
};
