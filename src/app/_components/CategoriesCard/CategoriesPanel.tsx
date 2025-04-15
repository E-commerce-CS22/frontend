import { Box, Button } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useCategoriesHook } from "./useCategoriesPanel.hook";
import { CategoryChip } from "./components/CategoryChip";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { primary } from "@/shared/customization";
import { t } from "i18next";
import { toast } from "react-toastify";

export const CategoriesPanel = () => {
  const { categoriesData, isLoading, isSuccess, isError } = useCategoriesHook();

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollAmount = 200;
      scrollContainer.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isLoading) toast.loading(t("Loading..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isError) toast.error(t("Failed to get data"));
  }, [isLoading, isSuccess, isError]);
  return (
    <Box
      sx={{
        position: "relative",
        bottom: "0rem",
        right: "0px",
        bgcolor: "white",
      }}
    >
      <Button
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          width: "40px",
          minWidth: "40px",
          height: "40px",
          borderRadius: "50%",
          bgcolor: primary,
          padding: 0,
          "&:hover": {
            backgroundColor: primary,
          },
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </Button>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflow: "auto",
          mx: "3rem",
          overflowY: "hidden",
          padding: "0.8rem 0",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          flexGrow: 1,
        }}
      >
        {categoriesData?.length &&
          categoriesData?.map((item) => (
            <CategoryChip
              key={item?.id}
              id={item?.id}
              name={item?.name}
              image={item?.image}
            />
          ))}
      </Box>
      <Button
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 2,
          color: "white",
          width: "40px",
          minWidth: "40px",
          height: "40px",
          borderRadius: "50%",
          bgcolor: primary,
          padding: 0,
        }}
      >
        <ArrowBackIosNew fontSize="small" />
      </Button>
    </Box>
  );
};
