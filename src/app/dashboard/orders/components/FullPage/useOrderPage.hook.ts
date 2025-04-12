import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getOrdersColumns } from "../OrdersColumns";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useOderPageHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token } = useContext(UserContext);

  const fetchOrders = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/orders?status=pending&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: ordersData,
  } = useQuery({
    queryKey: ["adminOrders"],
    queryFn: fetchOrders,
    enabled: !!token,
  });

  const handleNavigateToNewPage = () => {
    router.push("orders/new");
  };

  const tableActionButtons = [
    {
      title: t("Create Order"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    isLoading,
    isSuccess,
    isError,
    tableActionButtons,
    columns: getOrdersColumns(),
    ordersData: ordersData?.data,
  };
};
