/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { discountData } from "@/shared/types";
import { useContext, useEffect } from "react";
import { UserContext } from "@/shared/common/authentication";
import { useRouter, useSearchParams } from "next/navigation";

export const useEditDiscountHook = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

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

  const fetchDiscountInfo = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/admin/products/${productId}/discount`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoadingFetchingDiscountInfo,
    isError: isErrorFetchingDiscountInfo,
    isSuccess: isSuccessFetchingDiscountInfo,
    data: discountInfo,
  } = useQuery({
    queryKey: ["adminCategories"],
    queryFn: fetchDiscountInfo,
    enabled: !!token,
  });

  const {
    mutate,
    isError,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: (discountData: discountData) => {
      return axios.put(
        `${SERVER_URI}/api/admin/products/${productId}/discount`,
        discountData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const onDone = (data) => {
    const discountData = {
      discount_type: data?.discountType,
      discount_value: parseFloat(data?.discountValue),
      discount_start_date: data?.discountStartDate,
      discount_end_date: data?.discountEndDate,
    };

    mutate(discountData);
  };

  const handleClick = (data) => {
    const result = data;
    onDone(result);
  };

  useEffect(() => {
    if (isSuccess) {
      router.back();
    }
  }, [isSuccess, router]);

  return {
    errors,
    isError,
    isSuccess,
    isLoadingFetchingDiscountInfo,
    isSuccessFetchingDiscountInfo,
    isErrorFetchingDiscountInfo,
    discountInfo: discountInfo?.data,
    isLoading,
    register,
    handleSubmit,
    methods,
    control,
    handleClick,
  };
};
