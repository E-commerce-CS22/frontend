import { useQuery } from "@tanstack/react-query";
import { getToken } from "../../common/authentication/utils";

const fetchOrdersStatistics = async () => {
  const token = getToken();
  const response = await fetch("http://127.0.0.1:8000/api/admin/orders-statistics", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch orders statistics data");
  }

  const result = await response.json();

  // Directly return the data if no 'success' field is present
  if (result.total_orders !== undefined) {
    return result;
  }

  throw new Error(result.message || "Unknown error occurred");
};

export const useOrdersStatistics = () => {
  return useQuery({ queryKey: ["ordersStatistics"], queryFn: fetchOrdersStatistics });
};