import { useTranslation } from "react-i18next";
import { CategoriesForm } from "./categoryForm/CategoryForm";
import { TagsForm } from "./tagsForm/TagsForm";
import { VariantsForm } from "./variantForm/VariantForm";
// import { DiscountForm } from "./discountForm/DiscountForm";
import { DetailsForm } from "./detailsForm/DetailsForm";
import { ImageForm } from "./imageForm/ImageForm";

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
      content: <CategoriesForm />,
    },
    {
      name: t("Tags"),
      value: "3",
      content: <TagsForm />,
    },
    {
      name: t("Variants"),
      value: "4",
      content: <VariantsForm />,
    },
    {
      name: t("Product Image"),
      value: "5",
      content: <ImageForm />,
    },
  ];
};
