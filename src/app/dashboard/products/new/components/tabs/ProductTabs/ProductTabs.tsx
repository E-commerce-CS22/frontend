/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormActions } from "@/shared/components/FormActions";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTabs } from "@/shared/components/Tabs";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useProductsTabs } from "./ProductTabs.hook";

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

export const ProductTabs = (props: ProductTapsProps) => {
  const { t } = useTranslation("Store");
  const { isLoading, tabs } = props;

  const { sendProductData } = useProductsTabs();
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
