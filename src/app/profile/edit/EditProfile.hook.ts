/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { ProfileData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export const useEditProfileHook = () => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const fetchProfileData = async () => {
    const response = await axios.get(`${SERVER_URI}/api/customer/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoadingFetchingProfileData,
    isError: isErrorFetchingProfileData,
    isSuccess: isSuccessFetchingProfileData,
    data: profileData,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: fetchProfileData,
    enabled: !!token,
  });

  const { mutate, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({ profileData }: { profileData: ProfileData }) => {
      return axios.put(`${SERVER_URI}/api/customer/profile`, profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const onDone = (data) => {
    const profileInfo = {
      username: data?.username, // || profileData?.data?.username,
      first_name: data?.first_name, // || profileData?.data?.first_name,
      last_name: data?.last_name, // || profileData?.data?.last_name,
      email: data?.email, // || profileData?.data?.email,
      phone: data?.phone, // || profileData?.data?.phone,
      postal_code: data?.postal_code, // || profileData?.data?.postal_code,
      city: data?.city, // || profileData?.data?.city,
      country: data?.country, // || profileData?.data?.country,
      address: data?.address, // || profileData?.data?.address,
    };
    mutate({ profileData: profileInfo });
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
    isLoadingFetchingProfileData,
    isSuccessFetchingProfileData,
    isErrorFetchingProfileData,
    error,
    defaultValues: profileData?.data,
    methods,
    handleSubmit,
    isDirty,
    handleClick,
    handleCancel,
  };
};
