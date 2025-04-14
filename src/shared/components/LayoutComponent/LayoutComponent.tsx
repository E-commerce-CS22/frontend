"use client";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { UserContext } from "@/shared/common/authentication";
import { ToastContainer } from "react-toastify";
import Layout from "../Layout/Layout";
import { AccountDropdownMenu } from "../AccountDropdownMenu";
import { Notifications } from "@/shared/common/Notifications";
import { CustomerIcon } from "../icons";
import { capitalize } from "@/shared/utils";
import { useCustomerRoutes } from "./useCustomerRoutes";
import { useAdminRoutes } from "./useAdminRoutes";
import { usePublicRoutes } from "./usePublicRoutes";
import { routeWithSelectedItems } from "./utils";
import AuthModal from "../AuthModal";

export function LayoutComponent({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const { user, logout, isAuthenticated } = useContext(UserContext) || {};
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login");

  const userRole = user?.role;
  const publicRoutes = usePublicRoutes();
  const adminRoutes = useAdminRoutes();
  const customerRoutes = useCustomerRoutes();

  const [appRoutes, setAppRoutes] = useState(publicRoutes);
  useEffect(() => {
    if (userRole == "admin") setAppRoutes(adminRoutes);
    else if (userRole == "customer") setAppRoutes(customerRoutes);
    else {
      setAppRoutes(publicRoutes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userRole]);

  const isOpen = Boolean(anchorEl);

  const breadCrumb = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paramsObject: any = { ...params };
    delete paramsObject?.["*"];
    const paramsArray = Object.values(paramsObject);
    const splittedPath = pathname?.substring(1).split("/") || [];

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
          onClick: (fullPath: string) => {
            const i = splittedPath.indexOf(path);
            router.push(
              fullPath || "/" + splittedPath.slice(0, i + 1).join("/")
            );
          },
        };
      });
  }, [params, pathname, router]);

  const handleGoToHome = () => router.push("/");

  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const handleLogout = () => {
    setAnchorEl(null);
    logout?.();
    router.replace("/login");
  };

  const handleClickClose = () => setAnchorEl(null);
  const handleToggleDrawer = () => setOpen((prevState) => !prevState);

  const handleOpenLoginModal = () => {
    setAuthModalTab("login");
    setAuthModalOpen(true);
  };

  const handleOpenSignupModal = () => {
    setAuthModalTab("signup");
    setAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => setAuthModalOpen(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Layout
        isOpen={open}
        title={""}
        breadCrumb={breadCrumb.slice(1)}
        drawerItems={routeWithSelectedItems(appRoutes, pathname || "")}
        onGoToHome={handleGoToHome}
        onToggleDrawer={handleToggleDrawer}
        rightItems={[
          { id: "notifications", icon: <Notifications /> },
          {
            id: "account",
            icon: isAuthenticated ? (
              <IconButton
                onClick={handleClickOpen}
                color={isOpen ? "info" : "primary"}
              >
                <CustomerIcon />
              </IconButton>
            ) : (
              <Box display="flex" gap={1}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleOpenSignupModal}
                  size="small"
                >
                  {t("Register Now")}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOpenLoginModal}
                  size="small"
                >
                  {t("Login")}
                </Button>
              </Box>
            ),
          },
        ]}
        footer={
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            m="10px"
          >
            <Typography fontSize="14px">
              {t("Copyright © 2025 SMART STORE")}
            </Typography>
          </Box>
        }
      >
        {children}
      </Layout>

      {isOpen && (
        <AccountDropdownMenu
          username={
            [user?.customer_data?.first_name, user?.customer_data?.last_name]
              .filter(Boolean)
              .join(" ") || "User"
          }
          open={isOpen}
          onLogout={handleLogout}
          items={[]}
          anchorEl={anchorEl}
          onClose={handleClickClose}
          imgSrc={user?.profile}
        />
      )}

      <AuthModal
        open={authModalOpen}
        onClose={handleCloseAuthModal}
        initialTab={authModalTab}
      />
    </>
  );
}
