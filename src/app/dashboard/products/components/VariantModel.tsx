"use client";
import { Box, Typography } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import Image from "next/image";

type VariantsModelProps = {
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

  const { variants } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Variants")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box fontFamily={"CoHeadline-Light"}>
        {variants?.map((item, index) => (
          <Box
            sx={{ borderBottom: "1px solid #eee", padding: "0.5rem 0" }}
            key={index}
          >
            <Typography>
              {t("Color")}: {item?.color}
            </Typography>
            <Typography>
              {t("Raw")}: {item?.raw}
            </Typography>
            <Typography>
              {t("Memory")}: {item?.memory}
            </Typography>
            <Image
              width={"200"}
              height={"200"}
              src={item?.image}
              alt={item?.raw || ""}
            />
          </Box>
        ))}
      </Box>
    </CustomDialog>
  );
};
