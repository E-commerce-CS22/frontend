/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import createCache from "@emotion/cache";
import { CustomTheme } from "./theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import CssBaseline from "@mui/material/CssBaseline";
import { prefixer } from "stylis";
let muiCache: EmotionCache | undefined = undefined;

export const createMuiCache = (isRtl: boolean) =>
  (muiCache = createCache({
    key: isRtl ? "mui-rtl" : "mui",
    prepend: true,
    stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
  }));

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

  return (
    <CacheProvider value={muiCache ?? createMuiCache(direction === "rtl")}>
      <CssBaseline />
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>;
    </CacheProvider>
  );
};
