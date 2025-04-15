// import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategoriesHook = () => {
  const fetchCategories = async () => {
    const response = await axios.get(`${SERVER_URI}/api/categories`);
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
  });

  return {
    isLoading,
    isError,
    isSuccess,
    categoriesData: categoriesData?.data,
  };
};
