/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Box, Typography } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";

type VariantsModelProps = {
  id: string;
  variants: {
    color?: string;
    memory?: string;
    raw?: string;
    image: string;
  }[];
};

export const VariantsModel = (props: VariantsModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { variants, id } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const getVariantsColumns = (): any[] => [
    {
      key: "price",
      header: t("Price"),
      accessor: "price",
    },
    {
      key: "sku",
      header: t("Sku"),
      accessor: "sku",
    },
    {
      key: "stock",
      header: t("Stock"),
      accessor: "stock",
    },
    {
      key: "variant_title",
      header: t("Variant Title"),
      accessor: "variant_title",
    },
    // {
    //   key: "AddVariant",
    //   header: t("Add Variant"),
    //   accessor: (data) => {
    //     console.log(data, id);
    //     return (
    //       <IconButton onClick={() => {}}>
    //         <Add />
    //       </IconButton>
    //     );
    //   },
    // },
  ];
  return (
    <CustomDialog
      title={t("Variants")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box fontFamily={"CoHeadline-Light"}>
        {variants?.length ? (
          <PageWrapper padding="0px">
            <CustomTable
              columns={getVariantsColumns()}
              data={variants}
              pageIndex={1}
              pageSize={100}
              hasNextPage={false}
              hasPreviousPage={false}
              hasFooter={false}
            />
          </PageWrapper>
        ) : (
          <Typography>{t("no variants yet")}</Typography>
        )}
      </Box>
    </CustomDialog>
  );
};
