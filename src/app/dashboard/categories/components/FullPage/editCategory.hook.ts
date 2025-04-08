/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditCategoryHook = (props) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { id } = props;

  const fetchTags = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(
      `${SERVER_URI}/api/admin/categories/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoadingFetchingCategory,
    isError: isErrorFetchingCategory,
    isSuccess: isSuccessFetchingCategory,
    data: categoryData,
  } = useQuery({
    queryKey: ["adminCategories", id],
    queryFn: fetchTags,
    enabled: !!token,
  });

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({ id, categoryData }: { id: string; categoryData: any }) => {
      return axios.put(
        `${SERVER_URI}/api/admin/categories/${id}`,
        categoryData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

    mutate({ id, categoryData: formData });
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
    isErrorFetchingCategory,
    isSuccessFetchingCategory,
    isLoadingFetchingCategory,
    error,
    defaultValues: categoryData?.data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
