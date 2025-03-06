import { Box, Button } from "@mui/material";

import { ReactNode } from "react";

type TableActionsProps = {
  buttons?: {
    icon?: ReactNode;
    title: string;
  }[];
};

export const TableActions = (props: TableActionsProps) => {
  const { buttons } = props;
  return (
    <Box m={"1rem 1.5rem"}>
      {buttons &&
        buttons?.map((item) => (
          <Button
            variant="contained"
            key={item.title}
            sx={{ fontFamily: "inherit" }}
          >
            {item.icon && item.icon}
            {item.title}
          </Button>
        ))}
    </Box>
  );
};
