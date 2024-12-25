/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import { default as React, FC } from "react";
import AppMenu from "../Header/AdminHeader.component";
import Sidebar from "../Sidebar/Sidebar";
import { leftIcons, rightIcons } from "./routes";
import { LayoutProps } from "./Layout.types";
import { adminLayoutVariables } from "@/shared/customization/layout";
import { useLayoutStyles } from "./Layout.styles";

const Layout: FC<LayoutProps> = (props) => {
  const { drawerWidth } = adminLayoutVariables;
  const {
    position = "fixed",
    leftItems = leftIcons,
    rightItems = rightIcons,
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

  const { classes } = useLayoutStyles({ drawerWidth, isOpen });

  return (
    <Box sx={{ display: "flex" }}>
      <AppMenu
        branchName={branchName}
        position={position}
        leftItems={leftItems}
        rightItems={rightItems}
        title={title}
        breadCrumb={breadCrumb}
        isOpen={isOpen}
        onToggle={handleToggleDrawer}
      />

      {isOpen && (
        <Sidebar
          isOpen={isOpen}
          data={drawerItems ? drawerItems : []}
          footer={footer}
          onNavigate={handleNavigate}
          onToggleDrawer={handleToggleDrawer}
          onGoToHome={handleGoToHome}
        />
      )}
      <main className={classes.mainContainer} id="layout">
        {children}
      </main>
    </Box>
  );
};

export default Layout;
