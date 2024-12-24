"use client";

import { useTranslation } from "react-i18next";
import React, { useContext, useMemo, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { UserContext } from "@/shared/common/authentication";
import { ToastProvider } from "react-toast-notifications";
import Layout from "../Layout/Layout";
import SmallAlert from "../SmallAlert/SmallAlert";
import { AccountDropdownMenu } from "../AccountDropdownMenu";
import { Notifications } from "@/shared/common/Notifications";
import { routeWithSelectedItems } from "./utils";
import { useAppRoutes } from "./useAppRoutes";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const { i18n } = useTranslation("Store");
  const { isAuthenticated, user, logout } = useContext(UserContext) || {};
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const isOpen = Boolean(anchorEl);
  const routes = useAppRoutes();

  const breadCrumb = useMemo(() => {
    const pathArray = pathname.substring(1).split("/");

    return pathArray.map((path, i) => ({
      id: path,
      name: path,
      path,
      fullPath: "/" + pathArray.slice(0, i + 1).join("/"),
      onClick: (fullPath: string) => router.push(fullPath),
    }));
  }, [pathname]);

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
      {routes && (
        <Layout
          isOpen={open}
          title={"Smart Store"} //{t(breadCrumb[0]?.name || "")}
          breadCrumb={breadCrumb.slice(1)}
          drawerItems={routeWithSelectedItems(routes)}
          onGoToHome={handleGoToHome}
          onToggleDrawer={handleToggleDrawer}
          rightItems={[
            { id: "notifications", icon: <Notifications /> },
            {
              id: "admin",
              icon: isAuthenticated && (
                <IconButton
                  onClick={handleClickOpen}
                  color={isOpen ? "info" : "primary"}
                >
                  {/* Replace with valid icon */}
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
