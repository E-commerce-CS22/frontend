/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import React, { FC, memo } from "react";
import { MenuContextItemsProvider } from "./MenuContextItems.Provider";
import { SidebarList } from "./SidebarList.component";

const Sidebar: FC<any> = (props) => {
  const {
    anchor = "left",
    isOpen = true,
    data = undefined,
    footer = undefined,
    onToggleDrawer: handleToggleDrawer,
    onNavigate: handleNavigate,
    onGoToHome: handleGoToHome,
  } = props;

  return (
    <MuiDrawer
      sx={{
        flexShrink: 0,
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
      }}
      onClose={handleToggleDrawer}
      anchor={anchor}
      open={isOpen}
    >
      <div>
        <Box
          margin="auto"
          sx={{
            cursor: "pointer",
          }}
          onClick={handleGoToHome}
        ></Box>
      </div>
      <Box flex={1} overflow="auto">
        <MenuContextItemsProvider>
          {!!data.length && (
            <SidebarList data={data} onNavigate={handleNavigate} />
          )}
        </MenuContextItemsProvider>
        <Divider />
        {footer}
      </Box>
    </MuiDrawer>
  );
};

export default memo(Sidebar);
