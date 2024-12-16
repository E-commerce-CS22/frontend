/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { default as React, FC } from "react";
import AppMenu from "../Header/AdminHeader.component";
import Sidebar from "../Sidebar/Sidebar";

const Layout: FC<any> = (props) => {
  const {
    position = "fixed",
    branchName,
    title,
    breadCrumb,
    drawerItems = undefined,
    footer = undefined,
    onNavigate: handleNavigate = undefined,
    children,
    onGoToHome: handleGoToHome,
    isOpen,
    onToggleDrawer: handleToggleDrawer,
  } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <AppMenu
        branchName={branchName}
        position={position}
        title={title}
        breadCrumb={breadCrumb}
        isOpen={isOpen}
        onToggle={handleToggleDrawer}
      />
      {isOpen && (
        <Sidebar
          isOpen={isOpen}
          data={drawerItems}
          footer={footer}
          onNavigate={handleNavigate}
          onToggleDrawer={handleToggleDrawer}
          onGoToHome={handleGoToHome}
        />
      )}
      <main id="layout">{children}</main>
    </Box>
  );
};

export default Layout;
