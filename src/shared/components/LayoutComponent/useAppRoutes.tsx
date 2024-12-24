/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { BarChartIcon } from "../icons";
import { useMemo } from "react";

export const useAppRoutes = (): RouteItem[] => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  return useMemo(
    () => [
      {
        id: "dashboard",
        route: "dashboard",
        fullPath: "/dashboard",
        text: t("Dashboard"),
        icon: <BarChartIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
