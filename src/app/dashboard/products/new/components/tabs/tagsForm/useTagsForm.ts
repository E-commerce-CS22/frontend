/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../ProductContext";
export const useTagsForm = () => {
  const { token } = useContext(UserContext);
  const { setTags } = useContext(ProductContext);

  const fetchTags = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/tags`, {
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
    data: tagsData,
  } = useQuery({
    queryKey: ["adminTags"],
    queryFn: fetchTags,
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

  const handleChangeTags = (newValue, field) => {
    field.onChange(newValue);
    if (setTags) setTags(newValue);
  };
  return {
    isLoading,
    tags: tagsData?.data,
    methods,
    register,
    errors,
    isError,
    isSuccess,
    control,
    handleCancel,
    handleClick,
    handleSubmit,
    handleChangeTags,
  };
};
