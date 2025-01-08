/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "..";
import { UserLoginData } from "@/shared/types";

const loginFn = async (UserData: UserLoginData) => {
  const response = await apiClient.post(`/`, UserData);
  return response;
};

const signUpFn = async (UserData: any) => {
  // change any
  const response = await apiClient.post(`/`, UserData);
  return response;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginFn,
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpFn,
  });
};
