/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { TagData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditNewTagHook = (props) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { id } = props;

  const fetchTags = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(`${SERVER_URI}/api/admin/tags/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoadingFetchingTag,
    isError: isErrorFetchingTag,
    isSuccess: isSuccessFetchingTag,
    data: tagData,
  } = useQuery({
    queryKey: ["adminTags", id],
    queryFn: fetchTags,
    enabled: !!token,
  });

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({ id, tagData }: { id: string; tagData: TagData }) => {
      return axios.put(`${SERVER_URI}/api/admin/tags/${id}`, tagData, {
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
    mutate({ id, tagData: tag });
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
    isErrorFetchingTag,
    isSuccessFetchingTag,
    isLoadingFetchingTag,
    error,
    defaultValues: tagData?.data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
