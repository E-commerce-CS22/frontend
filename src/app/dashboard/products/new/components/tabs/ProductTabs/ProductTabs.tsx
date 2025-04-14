/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormActions } from "@/shared/components/FormActions";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTabs } from "@/shared/components/Tabs";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useProductsTabs } from "./ProductTabs.hook";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter hook from next/router

type ProductTapsProps = {
  isLoading?: boolean;
  handleClick: (data: any) => void;
  handleCancel: () => void;
  tabs: {
    name: string;
    value: string;
    content: React.ReactNode;
  }[];
};
type ApiError = {
  response?: {
    data?: {
      message?: string;
    };
  };
  message?: string;
};

const getErrorMessage = (error: ApiError | null | undefined): string => {
  if (!error) return "";
  return (
    error.response?.data?.message || error.message || "Unknown error occurred"
  );
};

const ProductTabs = (props: ProductTapsProps) => {
  const { t } = useTranslation("Store");
  const { isLoading, tabs } = props;
  const router = useRouter();
  const {
    isLoadingSendingDetails,
    isLoadingSendingCategories,
    isLoadingSendingTags,
    isLoadingSendingImage,
    isLoadingSendingVariants,
    sendProductData,
    isSendingDetailsSuccess,
    isSendingCategoriesSuccess,
    isSendingTagsSuccess,
    isSendingVariantsSuccess,
    isSendingImageSuccess,
    isSendingDetailsError,
    isSendingCategoriesError,
    isSendingTagsError,
    isSendingVariantsError,
    isSendingImageError,
    sendingDetailsError,
    sendingCategoriesError,
    sendingTagsError,
    sendingVariantsError,
    sendingImageError,
  } = useProductsTabs();

  useEffect(() => {
    if (
      isLoadingSendingDetails ||
      isLoadingSendingCategories ||
      isLoadingSendingTags ||
      isLoadingSendingImage ||
      isLoadingSendingVariants
    ) {
      toast.loading("Saving product...", { toastId: "savingProduct" });
    } else {
      toast.dismiss("savingProduct");
    }

    if (isSendingDetailsSuccess) {
      toast.success("Product details saved successfully!", {
        toastId: "detailsSaved",
      });
    }
    if (isSendingCategoriesSuccess) {
      toast.success("Product categories saved successfully!", {
        toastId: "categoriesSaved",
      });
    }
    if (isSendingTagsSuccess) {
      toast.success("Product tags saved successfully!", {
        toastId: "tagsSaved",
      });
    }
    if (isSendingVariantsSuccess) {
      toast.success("Product variants saved successfully!", {
        toastId: "variantsSaved",
      });
    }
    if (isSendingImageSuccess) {
      toast.success("Product image saved successfully!", {
        toastId: "imageSaved",
      });
    }

    if (
      isSendingDetailsError ||
      isSendingCategoriesError ||
      isSendingTagsError ||
      isSendingVariantsError ||
      isSendingImageError
    ) {
      const errorMessages = [
        getErrorMessage(sendingDetailsError),
        getErrorMessage(sendingCategoriesError),
        getErrorMessage(sendingTagsError),
        getErrorMessage(sendingVariantsError),
        getErrorMessage(sendingImageError),
      ]
        .filter(Boolean)
        .join(", ");

      toast.error(errorMessages || t("Failed to save product"), {
        toastId: "productSaveError",
      });
    }

    // Check if all operations were successful and navigate back
    if (
      isSendingDetailsSuccess &&
      isSendingCategoriesSuccess &&
      isSendingTagsSuccess &&
      isSendingVariantsSuccess &&
      isSendingImageSuccess
    ) {
      router.back(); // Navigate back to the previous page
    }
  }, [
    isLoadingSendingDetails,
    isLoadingSendingCategories,
    isLoadingSendingTags,
    isLoadingSendingImage,
    isLoadingSendingVariants,
    isSendingDetailsSuccess,
    isSendingCategoriesSuccess,
    isSendingTagsSuccess,
    isSendingVariantsSuccess,
    isSendingImageSuccess,
    isSendingDetailsError,
    isSendingCategoriesError,
    isSendingTagsError,
    isSendingVariantsError,
    isSendingImageError,
  ]);

  return (
    <Box sx={{ margin: "2rem", backgroundColor: "#fff" }}>
      <PageWrapper
        padding={"10px"}
        actions={
          <FormActions
            newButtonDisabled={isLoading}
            hasFormButton
            isLoading={isLoading}
            formButtonTitle={t("Save")}
            onSave={sendProductData}
          />
        }
      >
        <CustomTabs items={tabs} />
      </PageWrapper>
    </Box>
  );
};

export default ProductTabs;
