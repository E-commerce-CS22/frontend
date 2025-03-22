/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { CategoryData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useAddNewCategoryHook = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { mutate, isError, isPending, isSuccess, error, data } = useMutation({
    mutationFn: (categoryData: any) => {
      return axios.post(`${SERVER_URI}/api/admin/categories`, categoryData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { isDirty },
    watch,
  } = methods;

  const uploadedImage = watch("image");

  const onDone = (data) => {
    const formData = new FormData();

    formData.append("name", data?.categoryName || "");
    formData.append("description", data?.description || "");
    formData.append("slug", data?.slug || "");

    if (uploadedImage) {
      formData.append("image", uploadedImage);
    }

    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) router.back();
  }, [isSuccess, router]);

  const handleCancel = () => router.back();

  const handleClick = (data) => {
    const result = data;
    onDone(result);
  };

  return {
    isLoading: isPending,
    isError,
    isSuccess,
    error,
    data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
