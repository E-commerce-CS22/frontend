/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { BarChartIcon, ShopIcon } from "../icons";
import { useMemo } from "react";

export const useCustomerRoutes = (): RouteItem[] => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  return useMemo(
    () => [
      {
        id: "home",
        route: "home",
        fullPath: "/",
        text: t("Home"),
        icon: <BarChartIcon />,
        element: <div>Home page</div>,
        onClick: (route) => router.push(route),
      },

      {
        id: "products",
        route: "products",
        fullPath: "/products",
        text: t("Products"),
        icon: <ShopIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "profile",
        route: "profile",
        fullPath: "/profile",
        text: t("Profile"),
        icon: <BarChartIcon />,
        element: <div>Profile page</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
