import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { getProductAttributesColumns } from "./components/productAttributesColumns";

export const useProductAttributesHook = () => {
  const { t } = useTranslation("Store");
  const router = useRouter();

  const { token } = useContext(UserContext);

  const fetchProductAttributes = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/attributes`, {
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
    data: productAttributesData,
  } = useQuery({
    queryKey: ["adminProductsAttributes"],
    queryFn: fetchProductAttributes,
    enabled: !!token,
  });

  const handleNavigateToNewPage = () => {
    router.push("attributes/new");
  };

  const tableActionButtons = [
    {
      title: t("Create attribute"),
      buttonHandler: handleNavigateToNewPage,
    },
  ];

  return {
    isLoading,
    isSuccess,
    isError,
    tableActionButtons,
    columns: getProductAttributesColumns(t),
    productData: productAttributesData?.data,
  };
};
