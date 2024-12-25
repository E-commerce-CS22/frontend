/* eslint-disable @typescript-eslint/no-unused-expressions */
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { FC, Fragment, useContext } from "react";
import { MenuItemContext } from "./context";
import { useSidebarStyles } from "./Sidebar.styles";
import { SidebarItemProps } from "./Sidebar.types";
import { SidebarList } from "./SidebarList.component";

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const {
    onNavigate,
    data: {
      icon,
      text,
      onClick: onItemClick = undefined,
      subItems,
      selected,
      fullPath,
      id,
    },
  } = props;
  const subItemsFiltered =
    subItems?.filter((item) => item?.hidden !== true) || [];
  const { classes } = useSidebarStyles({ selected });
  const { id: selectedId, setId } = useContext(MenuItemContext);

  const handleItemPressed = () => {
    if (setId) {
      setId(id == selectedId ? undefined : id);
    }
    if (!subItemsFiltered?.length) {
      if (onNavigate) {
        onNavigate(fullPath ? fullPath : "/");
      } else {
        onItemClick && onItemClick(fullPath ? fullPath : "/");
      }
    }
  };

  return (
    <>
      <ListItem
        component={"li"}
        // selected={Boolean(
        //   id === selectedId ||
        //     selected ||
        //     subItems?.some((item) => item?.selected)
        // )}
        className={classes.listItem}
        onClick={handleItemPressed}
        sx={{ cursor: "pointer" }}
      >
        {icon && (
          <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
        )}
        <ListItemText className={classes.listItemText}>{text}</ListItemText>
        {!!subItemsFiltered?.length && <ExpandMore fontSize="small" />}
      </ListItem>
      {subItems && (
        <Collapse
          timeout="auto"
          unmountOnExit
          classes={{ root: classes.root }}
          in={
            id == selectedId ||
            selected ||
            subItems?.some((item) => item?.selected)
          }
        >
          <SidebarList data={subItems} disablePadding />
        </Collapse>
      )}
    </>
  );
};
