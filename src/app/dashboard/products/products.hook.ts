import { useTranslation } from "react-i18next";

export const useProductsHook = () => {
  const { t } = useTranslation("Store");
  const tableActionButtons = [
    {
      title: t("Create product"),
    },
  ];

  return { tableActionButtons };
};
