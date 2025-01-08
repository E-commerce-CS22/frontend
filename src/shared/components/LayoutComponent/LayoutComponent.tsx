/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useTranslation } from "react-i18next";
import React, { useContext, useMemo, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Box, IconButton, Typography } from "@mui/material";
import { UserContext } from "@/shared/common/authentication";
import { ToastProvider } from "react-toast-notifications";
import Layout from "../Layout/Layout";
import SmallAlert from "../SmallAlert/SmallAlert";
import { AccountDropdownMenu } from "../AccountDropdownMenu";
import { Notifications } from "@/shared/common/Notifications";
import { routeWithSelectedItems } from "./utils";
import { useAdminRoutes } from "./useAdminRoutes";
// import { useCustomerRoutes } from "./useCustomerRoutes";
import { CustomerIcon } from "../icons";
import { capitalize } from "@/shared/utils";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const { i18n } = useTranslation("Store");
  const { user, logout } = useContext(UserContext) || {}; // isAuthenticated
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(true);
  const authenticated = true;

  const isOpen = Boolean(anchorEl);
  const AdminRoutes = useAdminRoutes();
  // const customerRoutes = useCustomerRoutes();

  const breadCrumb = useMemo(() => {
    const paramsObject: any = params;
    delete paramsObject?.["*"];
    const paramsArray = Object.values(paramsObject);
    const splittedPath = location.pathname.substring(1).split("/");
    return splittedPath
      .filter((item) => !paramsArray.includes(item))
      .map((path, i) => {
        const indexVal =
          splittedPath?.[i + 1] && paramsArray.includes(splittedPath?.[i + 1])
            ? i + 2
            : i + 1;
        return {
          id: path,
          name: capitalize(path.split("-")),
          path: path,
          fullPath: "/" + splittedPath.slice(0, indexVal).join("/"),
          onClick: (fullPath) => {
            const i = splittedPath.indexOf(path);
            router.push(
              fullPath || "/" + splittedPath.slice(0, i + 1).join("/")
            );
          },
        };
      });
  }, [params, pathname]);

  const handleGoToHome = () => router.push("/");
  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleLogout = () => {
    setAnchorEl(null);
    logout();
    router.push("/login");
  };
  const handleClickClose = () => setAnchorEl(null);
  const handleToggleDrawer = () => setOpen((prevState) => !prevState);

  return (
    <ToastProvider
      components={{ Toast: SmallAlert }}
      placement={i18n.dir(i18n.language) === "rtl" ? "top-left" : "top-right"}
    >
      {AdminRoutes && (
        <Layout
          isOpen={open}
          title={"Smart Store"} //{t(breadCrumb[0]?.name || "")}
          breadCrumb={breadCrumb.slice(1)}
          drawerItems={routeWithSelectedItems(AdminRoutes)}
          onGoToHome={handleGoToHome}
          onToggleDrawer={handleToggleDrawer}
          rightItems={[
            { id: "notifications", icon: <Notifications /> },
            {
              id: "admin",
              icon: authenticated && (
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
              {/* <CardMedia
                image="/assets/images/smart store.png"
                title="SMART"
                sx={{ width: "60px", height: "46px" }}
              /> */}
              <Typography fontSize="14px">
                Copyright © 2025 SMART STORE
              </Typography>
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
