import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

export const useProfileHook = () => {
  const { token } = useContext(UserContext);
  // const { id } = user;
  const fetchProfileData = async () => {
    const response = await axios.get(`${SERVER_URI}/api/customer/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: profileData,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: fetchProfileData,
    enabled: !!token,
  });
  return {
    isLoading,
    isError,
    isSuccess,
    profileData: profileData?.data,
  };
};
