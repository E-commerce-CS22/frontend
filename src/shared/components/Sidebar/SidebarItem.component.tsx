import React, { FC, useContext } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuItemContext } from "./context";
import { SidebarItemProps } from "./Sidebar.types";
import { SidebarList } from "./SidebarList.component";
import ListItemButton from "@mui/material/ListItemButton";
import { MainTextColor } from "@/shared/customization";

export const SidebarItem: FC<SidebarItemProps> = (props) => {
  const {
    onNavigate,
    data: {
      icon,
      text,
      onClick: onItemClick,
      subItems,
      selected,
      fullPath,
      id,
    },
  } = props;

  const subItemsFiltered = subItems?.filter((item) => !item.hidden) || [];
  const { id: selectedId, setId } = useContext(MenuItemContext);

  const handleItemPressed = () => {
    if (setId) {
      setId(id === selectedId ? undefined : id);
    }
    if (!subItemsFiltered.length) {
      if (onNavigate) {
        onNavigate(fullPath || "/");
      } else if (onItemClick) {
        onItemClick(fullPath || "/");
      }
    }
  };

  return (
    <>
      <ListItemButton
        onClick={handleItemPressed}
        sx={{
          height: 50,
          backgroundColor: id === selectedId ? "#f0f0ff" : "transparent",
          borderRadius: 0,
          paddingInline: "8px",
          cursor: "pointer",
          fontFamily: "CoHeadlineTrial-Regular",
          "&:hover": {
            backgroundColor: "#E0E0E0",
          },
        }}
      >
        {icon && (
          <ListItemIcon
            sx={{
              minWidth: "fit-content",
              width: 20,
              height: 20,
              marginInline: 1,
              color: selected ? "#FFF" : "#000",
            }}
          >
            {icon}
          </ListItemIcon>
        )}
        <ListItemText
          primary={text}
          sx={{
            color: MainTextColor,
            fontSize: 14,
            "& > span": {
              fontSize: 14,
            },
          }}
        />
        {!!subItemsFiltered.length && <ExpandMore fontSize="small" />}
      </ListItemButton>
      {subItems && (
        <Collapse
          timeout="auto"
          unmountOnExit
          sx={{
            backgroundColor: "#F0F2F5",
          }}
          in={
            id === selectedId ||
            selected ||
            subItems.some((item) => item.selected)
          }
        >
          <SidebarList data={subItems} disablePadding />
        </Collapse>
      )}
    </>
  );
};
