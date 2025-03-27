/* eslint-disable react/jsx-no-undef */
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import RouteItem from "./routeTypes";
import { useMemo } from "react";
import {
  Call,
  ChatBubble,
  Home,
  LiveHelp,
  Login,
  PersonAdd,
  Shop,
} from "@mui/icons-material";

export const usePublicRoutes = (): RouteItem[] => {
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
        id: "chatbot",
        route: "chatbot",
        fullPath: "/chatbot",
        text: t("Ask AI"),
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
        id: "ContactUs",
        route: "Contact us",
        fullPath: "/contactUs",
        text: t("Contact Us"),
        icon: <Call color="primary" />,
        element: <div>Contact us page</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "login",
        route: "login",
        fullPath: "/login",
        text: t("Login"),
        icon: <Login color="primary" />,
        element: <div>Login page</div>,
        onClick: (route) => router.push(route),
      },
      {
        id: "signUp",
        route: "signup",
        fullPath: "/signup",
        text: t("Sign Up"),
        icon: <PersonAdd color="primary" />,
        element: <div>Sign Up page</div>,
        onClick: (route) => router.push(route),
      },
    ],
    [router, t]
  );
};
