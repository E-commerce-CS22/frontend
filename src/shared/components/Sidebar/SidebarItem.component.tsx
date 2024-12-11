/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { FC, Fragment, useContext } from "react";
import { MenuItemContext } from "./context";
import { SidebarList } from "./SidebarList.component";
import { SidebarItemProps } from "./Sidebar.types";

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
  const { id: selectedId, setId } = useContext(MenuItemContext);

  const handleItemPressed = () => {
    if (setId) {
      setId(id == selectedId ? undefined : id);
    }
    if (!subItemsFiltered?.length) {
      if (onNavigate) {
        // onNavigate(fullPath);
      } else {
        // onItemClick && onItemClick(fullPath);
      }
    }
  };

  return (
    <Fragment>
      <ListItem
      // component="li"
      // selected={Boolean(
      //   id == selectedId ||
      //     selected ||
      //     subItems?.some((item) => item?.selected)
      // )}
      // button
      // onClick={handleItemPressed}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText>{text}</ListItemText>
        {!!subItemsFiltered?.length && <ExpandMore fontSize="small" />}
      </ListItem>
      {subItems && (
        <Collapse
          timeout="auto"
          unmountOnExit
          in={
            id == selectedId ||
            selected ||
            subItems?.some((item) => item?.selected)
          }
        >
          <SidebarList data={subItems} disablePadding />
        </Collapse>
      )}
    </Fragment>
  );
};
