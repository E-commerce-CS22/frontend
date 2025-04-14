"use client";
import { Box, Typography } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import { CustomTable } from "@/shared/components/Table";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";

type TagsModelProps = {
  tags: {
    name: string;
    slug?: string;
    pivot?: {
      product_id?: string | number;
      tag_id?: string | number;
    };
  }[];
};

export const TagsModel = (props: TagsModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { tags } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getTagsColumns = (): any[] => [
    {
      key: "Tagname",
      header: t("Tag name"),
      accessor: "name",
    },
    {
      key: "slug",
      header: t("Slug"),
      accessor: "slug",
    },
  ];

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Tags")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box fontFamily={"CoHeadline-Light"}>
        {tags && tags?.length ? (
          <PageWrapper padding="0px">
            <CustomTable
              columns={getTagsColumns()}
              data={tags}
              pageIndex={1}
              pageSize={100}
              hasNextPage={false}
              hasPreviousPage={false}
              hasFooter={false}
            />
          </PageWrapper>
        ) : (
          <Typography>{t("No tags yet")}</Typography>
        )}
      </Box>
    </CustomDialog>
  );
};
