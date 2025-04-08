/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginInputData } from "@/shared/types";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { mutate, isError, isPending, isSuccess, error, data } = useMutation({
    mutationFn: (userData: LoginInputData) => {
      return axios.post(`${SERVER_URI}/api/login`, userData);
    },
  });

  const { login } = useContext(UserContext);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (data) => {
    mutate({
      email: data?.email,
      password: data?.password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      login(data?.data?.token, data?.data.user);
      router.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data, login]);
  return {
    isError,
    isSuccess,
    isLoading: isPending,
    error,
    onSubmit,
    showPassword,
    handleClickShowPassword,
  };
};
