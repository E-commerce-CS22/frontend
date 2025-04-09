"use client";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import { ExpandIcon } from "@/shared/components/icons";

type CustomAccordionProps = {
  question?: string;
  description?: string;
  expanded?: boolean | undefined;
};
export const CustomAccordion: FC<CustomAccordionProps> = ({
  question,
  description,
  expanded,
}) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(expanded);
  const handleOnToggle = () => {
    setOpen(!open);
  };
  return (
    <Container fixed>
      <Accordion
        expanded={open ? open : false}
        sx={{
          boxShadow: "0",
          borderRadius: "15px !important",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            height: 60,
          }}
          onClick={handleOnToggle}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontFamily: "CoHeadlineTrial-Light,Arab Kufi Regular",
            }}
          >
            {question ? question : t("Question")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontSize={"14px"}>
            {description
              ? description
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};
