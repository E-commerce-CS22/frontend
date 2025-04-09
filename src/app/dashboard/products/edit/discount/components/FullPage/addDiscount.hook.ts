/* eslint-disable @typescript-eslint/no-explicit-any */
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { discountData } from "@/shared/types";
import { useContext, useEffect } from "react";
import { UserContext } from "@/shared/common/authentication";
import { useRouter, useSearchParams } from "next/navigation";

export const useAddDiscountHook = () => {
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

  const {
    mutate,
    isError,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: (discountData: discountData) => {
      return axios.post(
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
    isLoading,
    register,
    handleSubmit,
    methods,
    control,
    handleClick,
  };
};
