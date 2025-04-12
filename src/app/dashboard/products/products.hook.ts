import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { getProductsColumns } from "./components/ProductsColumns";
import { useContext } from "react";
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProductsHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token } = useContext(UserContext);

  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/products`, {
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
    data: productData,
  } = useQuery({
    queryKey: ["adminProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  const handleNavigateToNewPage = () => {
    router.push("products/new");
  };

  const tableActionButtons = [
    {
      title: t("Create product"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    isLoading,
    isSuccess,
    isError,
    tableActionButtons,
    columns: getProductsColumns(t),
    productData: productData?.data,
  };
};
