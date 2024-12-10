"use client";
import { i18n } from "@/shared/utils/i18next";
import { Stack, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  localStorage.setItem("locale-default", "ar");
  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang, () => {
      if (typeof window !== "undefined") {
        location.reload();
      }
    });
  };
  const handleChangeLanguage = (): void => {
    if (i18n.language === "en") {
      onChangeLanguage("ar");
    } else {
      onChangeLanguage("en");
    }
  };
  return (
    <Stack>
      <Stack>{t("Smart Store")}</Stack>
      <Button onClick={handleChangeLanguage}>{t("Change Language")}</Button>
    </Stack>
  );
}
