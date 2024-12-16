"use client";
import { i18n } from "@/shared/utils/i18next";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ChangeLangButton() {
  const { t } = useTranslation("Store");
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
  return <Button onClick={handleChangeLanguage}>{t("Change Language")}</Button>;
}
