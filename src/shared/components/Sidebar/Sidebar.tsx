import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { FC, memo } from "react";
import { adminLayoutVariables } from "../../customization/layout";
import { MenuContextItemsProvider } from "./MenuContextItems.Provider";
import { useSidebarStyles } from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.types";
import { SidebarList } from "./SidebarList.component";
import { Typography } from "@mui/material";
import Image from "next/image";

const Sidebar: FC<SidebarProps> = (props) => {
  const {
    anchor = "left",
    isOpen = true,
    data = undefined,
    footer = undefined,
    onToggleDrawer: handleToggleDrawer,
    onNavigate: handleNavigate,
    onGoToHome: handleGoToHome,
  } = props;

  const { classes, theme } = useSidebarStyles({});
  const media = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MuiDrawer
      sx={{
        width: adminLayoutVariables.drawerWidth,
        flexShrink: 0,
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        "& .MuiDrawer-paper": {
          width: adminLayoutVariables.drawerWidth,
          boxSizing: "border-box",
        },
      }}
      onClose={handleToggleDrawer}
      variant={!media ? "persistent" : "temporary"}
      anchor={anchor}
      open={isOpen}
    >
      <div className={classes.drawerHeader}>
        <Box
          sx={{
            cursor: "pointer",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            margin: "0 1rem",
          }}
          onClick={handleGoToHome}
        >
          <Image
            alt="smartStore"
            src={"/smartStore1.png"}
            width={30}
            height={30}
          />
          <Typography m={"0 8px"}>Smart Store</Typography>
        </Box>
      </div>
      <Box
        flex={1}
        overflow="auto"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <MenuContextItemsProvider>
          {!!data?.length && (
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
