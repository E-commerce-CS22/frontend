import { CustomerRegisterData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
export const useSignUpHook = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const mutation = useMutation({
    mutationFn: (userData: CustomerRegisterData) => {
      return axios.post(`${SERVER_URI}/api/customer/register`, userData);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    mutation.mutate({
      first_name: data?.firstName,
      last_name: data?.lastName,
      email: data?.email,
      username: data?.username,
      phone: data?.phoneNumber,
      password: data?.password,
      password_confirmation: data?.confirmPassword,
      address: data?.address,
      city: data?.city,
    });
  };

  return {
    showPassword,
    showConfirmPassword,
    onSubmit,
    handleClickShowConfirmPassword,
    handleClickShowPassword,
    isError: mutation.isError,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
};
