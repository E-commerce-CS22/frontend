/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useReactiveVar } from "@apollo/client";
"use client";
import { UserContext } from "@/shared/common/authentication";
import { useTranslation } from "react-i18next";
// import { openVar } from "@health/queries";
import {
  Box,
  CardMedia,
  // CustomerIcon,
  IconButton,
  // Layout,
  // SidebarDataType,
  // SmallAlert,
  // ToastProvider,
  Typography,
} from "@mui/material";
import { AccountDropdownMenu } from "../AccountDropdownMenu";
import { CustomerIcon } from "../icons";
import Layout from "../Layout/Layout";
import { SidebarDataType } from "../Sidebar/Sidebar.types";
import SmallAlert from "../SmallAlert/SmallAlert";
import { ToastProvider } from "react-toast-notifications";
import { Notifications } from "@/shared/common/Notifications";

import React, { useContext, useMemo, useState } from "react";
import { useRouter } from "next/router";
// import { Notifications } from "shared/components";
import { useAppRoutes } from "./useAppRoutes";
import { routeWithSelectedItems } from "./utils";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { t, i18n } = useTranslation();
  const { isAuthenticated, user, logout } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const routes = useAppRoutes();

  const breadCrumb = useMemo(() => {
    const paramsObject: any = router.query;
    delete paramsObject?.["*"];
    const paramsArray = Object.values(paramsObject);
    const pathArray = router.asPath.substring(1).split("/");
    return pathArray
      .filter((item) => !paramsArray.includes(item))
      .map((path, i) => {
        const indexVal =
          pathArray?.[i + 1] && paramsArray.includes(pathArray?.[i + 1])
            ? i + 2
            : i + 1;
        return {
          id: path,
          name: path, //capitalize(path.split("-")),
          path: path,
          fullPath: "/" + pathArray.slice(0, indexVal).join("/"),
          onClick: (fullPath) => {
            const i = pathArray.indexOf(path);
            router.push(fullPath || "/" + pathArray.slice(0, i + 1).join("/"));
          },
        };
      });
  }, [router.query, router.asPath]);

  const handleGoToHome = () => {
    router.push("/");
  };
  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    window.location.href = "/login";
    window?.["sseControllerRef"]?.abort();
    logout();
  };
  const handleClickClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <ToastProvider
      components={{ Toast: SmallAlert }}
      placement={i18n.dir(i18n.language) === "rtl" ? "top-left" : "top-right"}
    >
      {routes && (
        <Layout
          isOpen={open}
          title={t(breadCrumb[0]?.name)}
          breadCrumb={breadCrumb.slice(1, breadCrumb?.length)}
          drawerItems={routeWithSelectedItems(
            routes as unknown as SidebarDataType[]
          )}
          onGoToHome={handleGoToHome}
          onToggleDrawer={handleToggleDrawer}
          rightItems={[
            {
              id: "notifications",
              icon: <Notifications />,
            },
            {
              id: "admin",
              icon: isAuthenticated && (
                <IconButton
                  onClick={handleClickOpen}
                  color={isOpen ? "info" : "primary"}
                >
                  <CustomerIcon />
                </IconButton>
              ),
            },
          ]}
          footer={
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              m="10px 0"
            >
              <CardMedia
                image="/assets/images/NUPCO.png"
                title="NUPCO"
                sx={{ width: "60px", height: "46px" }}
              />
              <Typography fontSize="14px">Copyright © 2022 NUPCO</Typography>
            </Box>
          }
        >
          {children}
        </Layout>
      )}

      {isOpen && (
        <AccountDropdownMenu
          username={
            [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
            "User"
          }
          open={isOpen}
          onLogout={handleLogout}
          items={[]}
          anchorEl={anchorEl}
          onClose={handleClickClose}
        />
      )}
    </ToastProvider>
  );
}
