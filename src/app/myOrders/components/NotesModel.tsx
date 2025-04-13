"use client";
import { Typography } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";

type NotesModelProps = {
  desc: string;
};

export const NotesModel = (props: NotesModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { desc } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Description")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Typography>{desc}</Typography>
    </CustomDialog>
  );
};
