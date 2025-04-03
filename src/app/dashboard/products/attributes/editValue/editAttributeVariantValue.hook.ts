/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { AttributeData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditAttributeVariantValueHook = (props) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { id, attributeId } = props;

  const fetchAttributeVariantValue = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(
      `${SERVER_URI}/api/admin/attributes/${attributeId}/values/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoadingFetchingAttributeVariantValue,
    isError: isErrorFetchingAttributeVariantValue,
    isSuccess: isSuccessFetchingAttributeVariantValue,
    data: attributeData,
  } = useQuery({
    queryKey: ["adminProductsAttributeVariantValue", id],
    queryFn: fetchAttributeVariantValue,
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
        `${SERVER_URI}/api/admin/attributes/${attributeId}/values/${id}`,
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
    isErrorFetchingAttributeVariantValue,
    isSuccessFetchingAttributeVariantValue,
    isLoadingFetchingAttributeVariantValue,
    error,
    defaultValues: attributeData?.data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
