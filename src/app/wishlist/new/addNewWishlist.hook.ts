/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { TagData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useAddNewWishlistHook = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { mutate, isError, isPending, isSuccess, error, data } = useMutation({
    mutationFn: (tagData: TagData) => {
      return axios.post(`${SERVER_URI}/api/admin/tags`, tagData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const onDone = (data) => {
    const tag = {
      name: data?.tagName,
      slug: data?.slug,
    };
    mutate(tag);
  };

  useEffect(() => {
    if (isSuccess) router.back();
  }, [isSuccess, router]);

  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });
  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

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
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
