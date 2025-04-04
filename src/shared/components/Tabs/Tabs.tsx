/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

interface TabItem {
  name: string;
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface CustomTabsProps {
  variant?: "modal" | "card";
  items: TabItem[];
  TabListProps?: Record<string, any>;
}

const CustomTabs: FC<CustomTabsProps> = ({
  variant = "modal",
  items,
  TabListProps,
}) => {
  const [value, setValue] = useState(items[0]?.value);
  const [tabs, setTabs] = useState(items);

  useEffect(() => {
    setTabs(items);
  }, [items]);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            "& .MuiTabs-flexContainer":
              variant === "card" ? { borderBottom: "1px solid #ccc" } : {},
          }}
          {...TabListProps}
        >
          {tabs.map((item) => (
            <Tab
              key={item.value}
              label={item.name}
              value={item.value}
              disabled={item.disabled ?? false}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: "text.primary",
                "&.Mui-selected": { color: "primary.main" },
              }}
            />
          ))}
        </Tabs>
        {tabs.map((item, index) => (
          <TabPanel key={index} value={item.value} sx={{ p: 2 }}>
            {item.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};

export default CustomTabs;
