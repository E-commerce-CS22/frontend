/* eslint-disable @typescript-eslint/no-explicit-any */
import List from "@mui/material/List";
import { ListProps } from "@mui/material";
import { default as React, FC } from "react";
import { SidebarItem } from "./SidebarItem.component";

type SidebarListProps = {
  data: any[];
  onNavigate?: (path: string) => void;
} & ListProps;

export const SidebarList: FC<SidebarListProps> = (props) => {
  const { data, onNavigate: handleNavigate, ...rest } = props;
  return (
    <List
      {...rest}
      sx={{
        "ul:first-of-type div": {
          paddingLeft: "23px",
        },
      }}
    >
      {data?.map((item) => {
        let itemData = item;
        if (
          item?.subItems?.length &&
          item?.subItems?.filter((itemRow) => !itemRow?.hidden)?.length <= 1
        ) {
          itemData = item?.subItems[0];
          itemData.icon = item?.icon;
          itemData.text = item?.text;
          itemData.selected = false;
        }
        return (
          !item.hidden &&
          !item?.isProhibited && (
            <SidebarItem
              key={itemData?.id}
              data={itemData}
              onNavigate={handleNavigate}
            />
          )
        );
      })}
    </List>
  );
};
