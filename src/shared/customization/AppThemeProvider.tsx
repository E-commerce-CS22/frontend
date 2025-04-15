"use client";

import { useTranslation } from "react-i18next";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo } from "react";
import createCache from "@emotion/cache";
import { CustomTheme } from "./theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import CssBaseline from "@mui/material/CssBaseline";
import { prefixer } from "stylis";

const createMuiCache = (isRtl: boolean): EmotionCache =>
  createCache({
    key: isRtl ? "mui-rtl" : "mui",
    prepend: true,
    stylisPlugins: isRtl ? [prefixer, rtlPlugin] : [],
  });

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { i18n } = useTranslation();
  const direction = i18n.dir(i18n.language); // "rtl" or "ltr"

  const theme = useMemo(() => {
    return {
      ...CustomTheme,
      direction,
    };
  }, [direction]);

  const muiCache = useMemo(
    () => createMuiCache(direction === "rtl"),
    [direction]
  );

  useEffect(() => {
    // Apply direction to <html> and <body>
    if (typeof window !== "undefined") {
      document.documentElement.dir = direction;
      document.documentElement.lang = i18n.language;
      document.body.setAttribute("dir", direction);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <CacheProvider value={muiCache}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};
