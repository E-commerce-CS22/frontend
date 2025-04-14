import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../common/authentication/utils";

const fetchUserActivity = async () => {
  const token = getToken();
  const response = await fetch("http://127.0.0.1:8000/api/admin/user-activity", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user activity data");
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Unknown error occurred");
  }

  return result.data;
};

export const useUserActivity = () => {
  return useQuery({ queryKey: ["userActivity"], queryFn: fetchUserActivity });
};