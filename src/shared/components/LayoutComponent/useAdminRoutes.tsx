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
        text: t("Products"),
        icon: <ShoppingCart color="primary" />,
        element: <div>Products</div>,
        subItems: [
          {
            id: "products",
            route: "products",
            fullPath: "/dashboard/products",
            text: t("Products"),
            element: <div>Products</div>,
            onClick: (route) => router.push(route),
          },
          {
            id: "productAttributes",
            route: "products/attributes",
            fullPath: "/dashboard/products/attributes",
            text: t("Product Attributes"),
            element: <div>Product Attributes</div>,
            onClick: (route) => router.push(route),
          },
          // {
          //   id: "productVariants",
          //   route: "products/variants",
          //   fullPath: "/dashboard/products/variants",
          //   text: t("Product Variants"),
          //   element: <div>Product Variants</div>,
          //   onClick: (route) => router.push(route),
          // },
        ],
      },
      {
        id: "customers",
        route: "customers",
        fullPath: "/dashboard/customers",
        text: t("Customers"),
        icon: <PeopleAlt color="primary" />,
        element: <div>Customers</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "categories",
        route: "categories",
        fullPath: "/dashboard/categories",
        text: t("Categories"),
        icon: <Category color="primary" />,
        element: <div>Categories</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "tags",
        route: "tags",
        fullPath: "/dashboard/tags",
        text: t("Tags"),
        icon: <Style color="primary" />,
        element: <div>Tags</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
