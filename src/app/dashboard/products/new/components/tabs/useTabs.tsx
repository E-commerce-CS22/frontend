import { useTranslation } from "react-i18next";
import { CategoryForm } from "./CategoryForm";
import { TagsForm } from "./TagsForm";
import { VariantForm } from "./VariantForm";
import { DiscountForm } from "./DiscountForm";

export const useTabs = () => {
  const { t } = useTranslation();
  return [
    {
      name: t("Categories"),
      value: "1",
      content: <CategoryForm />,
    },
    {
      name: t("Tags"),
      value: "2",
      content: <TagsForm />,
    },
    {
      name: t("Variants"),
      value: "3",
      content: <VariantForm />,
    },
    {
      name: t("Discount"),
      value: "4",
      content: <DiscountForm />,
    },
  ];
};
