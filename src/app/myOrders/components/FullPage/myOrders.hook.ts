import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { getOrdersColumns } from "../OrdersColumns";
import { useTranslation } from "react-i18next";

export const useMyOrdersHook = () => {
  const { t } = useTranslation("Store");
  const { token } = useContext(UserContext);

  const fetchMyOrders = async () => {
    const response = await axios.get(`${SERVER_URI}/api/customer/orders`, {
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
    data: myOrdersData,
  } = useQuery({
    queryKey: ["clientOrders"],
    queryFn: fetchMyOrders,
    enabled: !!token,
  });
  return {
    isLoading,
    isSuccess,
    isError,
    columns: getOrdersColumns(t),
    myOrdersData: myOrdersData?.data,
  };
};
