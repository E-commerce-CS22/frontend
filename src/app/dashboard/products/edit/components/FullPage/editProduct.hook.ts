/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { ProductData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditProductHook = (props) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const { id } = props;

  const fetchProducts = async ({ queryKey }) => {
    const [, id] = queryKey;
    const response = await axios.get(`${SERVER_URI}/api/admin/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoadingFetchingProduct,
    isError: isErrorFetchingProduct,
    isSuccess: isSuccessFetchingProduct,
    data: productData,
  } = useQuery({
    queryKey: ["adminProducts", id],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({
      id,
      productData,
    }: {
      id: string;
      productData: ProductData;
    }) => {
      return axios.put(`${SERVER_URI}/api/admin/products/${id}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const onDone = (data) => {
    const product = {
      name: data?.name,
      price: data?.price,
      description: data?.description,
    };
    mutate({ id, productData: product });
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
    isErrorFetchingProduct,
    isSuccessFetchingProduct,
    isLoadingFetchingProduct,
    error,
    defaultValues: productData,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
