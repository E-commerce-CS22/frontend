/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { AttributeData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditAttributeHook = (props) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { id } = props;

  const fetchAttribute = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(
      `${SERVER_URI}/api/admin/attributes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoadingFetchingAttribute,
    isError: isErrorFetchingAttribute,
    isSuccess: isSuccessFetchingAttribute,
    data: attributeData,
  } = useQuery({
    queryKey: ["adminProductsAttribute", id],
    queryFn: fetchAttribute,
    enabled: !!token,
  });

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({
      id,
      attributeData,
    }: {
      id: string;
      attributeData: AttributeData;
    }) => {
      return axios.put(
        `${SERVER_URI}/api/admin/attributes/${id}`,
        attributeData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const onDone = (data) => {
    const attribute = {
      name: data?.name,
    };
    mutate({ id, attributeData: attribute });
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
    isErrorFetchingAttribute,
    isSuccessFetchingAttribute,
    isLoadingFetchingAttribute,
    error,
    defaultValues: attributeData?.data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
