/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { BarChartIcon, ProductIcon } from "../icons";
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

      {
        id: "products",
        route: "products",
        fullPath: "dashboard/products",
        text: t("Products"),
        icon: <ProductIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "customers",
        route: "customers",
        fullPath: "/customers",
        text: t("Customers"),
        icon: <BarChartIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "categories",
        route: "categories",
        fullPath: "/categories",
        text: t("Categories"),
        icon: <BarChartIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "tags",
        route: "tags",
        fullPath: "/tags",
        text: t("Tags"),
        icon: <BarChartIcon />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
