"use client";
import { Box, Typography } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";

type TagsModelProps = {
  tags: string[];
};

export const TagsModel = (props: TagsModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { tags } = props;

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
        {tags?.map((item, index) => (
          <Typography
            sx={{ borderBottom: "1px solid #eee", padding: "0.5rem 0" }}
            key={index}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </CustomDialog>
  );
};
