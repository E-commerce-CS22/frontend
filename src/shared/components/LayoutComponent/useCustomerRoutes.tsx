/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { useMemo } from "react";
import {
  AccountCircle,
  ChatBubble,
  Favorite,
  Home,
  LiveHelp,
  LocalMall,
  Shop,
  ShoppingCart,
} from "@mui/icons-material";

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
        icon: <Home color="primary" />,
        element: <div>Home page</div>,
        onClick: (route) => router.push(route),
      },

      {
        id: "products",
        route: "products",
        fullPath: "/products",
        text: t("Products"),
        icon: <Shop color="primary" />,
        element: <div>Products</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "cart",
        route: "cart",
        fullPath: "/cart",
        text: t("My Cart"),
        icon: <ShoppingCart color="primary" />,
        element: <div>Cart</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "myOrders",
        route: "myOrders",
        fullPath: "/myOrders",
        text: t("My Orders"),
        icon: <LocalMall color="primary" />,
        element: <div>My Orders</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "wishlist",
        route: "wishlist",
        fullPath: "/wishlist",
        text: t("Wishlist"),
        icon: <Favorite color="primary" />,
        element: <div>WishList page.</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "chatbot",
        route: "chatbot",
        fullPath: "/chatbot",
        text: t("Chatbot"),
        icon: <ChatBubble color="primary" />,
        element: <div>Chatbot</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "AboutUs",
        route: "About us",
        fullPath: "/aboutUs",
        text: t("About Us"),
        icon: <LiveHelp color="primary" />,
        element: <div>About us page</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "profile",
        route: "profile",
        fullPath: "/profile",
        text: t("Profile"),
        icon: <AccountCircle color="primary" />,
        element: <div>Profile page</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
