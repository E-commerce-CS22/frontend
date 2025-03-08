/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { useMemo } from "react";
import {
  Category,
  Dashboard,
  PeopleAlt,
  ShoppingCart,
  Style,
} from "@mui/icons-material";

export const useAdminRoutes = (): RouteItem[] => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  return useMemo(
    () => [
      {
        id: "dashboard",
        route: "dashboard",
        fullPath: "/dashboard",
        text: t("Dashboard"),
        icon: <Dashboard color="primary" />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },

      {
        id: "products",
        route: "products",
        fullPath: "dashboard/products",
        text: t("Products"),
        icon: <ShoppingCart color="primary" />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "customers",
        route: "customers",
        fullPath: "dashboard/customers",
        text: t("Customers"),
        icon: <PeopleAlt color="primary" />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "categories",
        route: "categories",
        fullPath: "dashboard/categories",
        text: t("Categories"),
        icon: <Category color="primary" />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "tags",
        route: "tags",
        fullPath: "dashboard/tags",
        text: t("Tags"),
        icon: <Style color="primary" />,
        element: <div>Coming Soon</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
