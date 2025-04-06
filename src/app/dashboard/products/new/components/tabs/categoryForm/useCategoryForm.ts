/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
export const useCategoriesForm = () => {
  const { token } = useContext(UserContext);

  const fetchCategories = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/categories`, {
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
    queryKey: ["adminCategories"],
    queryFn: fetchCategories,
    enabled: !!token,
  });
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = methods;

  const handleCancel = () => {};
  const handleClick = () => {};
  return {
    isLoading,
    categories: categoriesData?.data,
    methods,
    register,
    errors,
    isError,
    isSuccess,
    control,
    handleCancel,
    handleClick,
    handleSubmit,
  };
};
