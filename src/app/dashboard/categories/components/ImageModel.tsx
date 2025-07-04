"use client";
import { Box } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import Image from "next/image";

type ImageModelProps = {
  image: string;
  name: string;
};

export const ImageModel = (props: ImageModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { image, name } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Category Image")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="md"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box
        p={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          height: "600px",
        }}
      >
        <Image
          alt={name}
          src={image || "/smartStore1.png"}
          width={600}
          height={600}
        />
      </Box>
    </CustomDialog>
  );
};
