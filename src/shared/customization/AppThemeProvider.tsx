/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { CustomTheme } from "./theme";

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [appTheme, setAppTheme] = useState(CustomTheme);
  const { i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);

  useEffect(() => {
    if (typeof window == "undefined") return;
    const i18nDefault = localStorage.getItem("locale-default");
    if (!i18nDefault) {
      i18n.changeLanguage("ar", () => {
        localStorage.setItem("locale-default", "ar");
        // is in consumer app!!!!
        if (!process.env.NEXT_PUBLIC_UPLOAD_SERVICE_URL) location.reload();
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.dir = direction;
      document
        ?.getElementsByTagName("html")?.[0]
        ?.setAttribute("dir", direction);
      document
        ?.getElementsByTagName("html")?.[0]
        ?.setAttribute("lang", i18n.language);
      document
        ?.getElementsByTagName("body")?.[0]
        ?.setAttribute("dir", direction);
      setAppTheme({ ...appTheme, direction });
    }
  }, [direction]);

  return <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
};
