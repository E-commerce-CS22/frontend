import { useTranslation } from "react-i18next";
import { CategoryForm } from "./CategoryForm";
import { TagsForm } from "./TagsForm";
import { VariantForm } from "./VariantForm";
import { DiscountForm } from "./DiscountForm";
import { DetailsForm } from "./detailsForm/DetailsForm";

export const useTabs = () => {
  const { t } = useTranslation("Store");
  return [
    {
      name: t("Details"),
      value: "1",
      content: <DetailsForm />,
    },
    {
      name: t("Categories"),
      value: "2",
      content: <CategoryForm />,
    },
    {
      name: t("Tags"),
      value: "3",
      content: <TagsForm />,
    },
    {
      name: t("Variants"),
      value: "4",
      content: <VariantForm />,
    },
    {
      name: t("Discount"),
      value: "5",
      content: <DiscountForm />,
    },
  ];
};
