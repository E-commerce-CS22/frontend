import { Box, Button } from "@mui/material";

import { ReactNode } from "react";

type TableActionsProps = {
  buttons?: {
    icon?: ReactNode;
    title: string;
    buttonHandler: () => void;
  }[];
};

export const TableActions = (props: TableActionsProps) => {
  const { buttons } = props;
  return (
    <Box m={"1rem 1.5rem"}>
      {buttons?.length &&
        buttons?.map((item) => (
          <Button
            variant="contained"
            color={"success"}
            key={item.title}
            sx={{ fontFamily: "inherit", color: "white" }}
            onClick={item.buttonHandler}
          >
            {item.icon && item.icon}
            {item.title}
          </Button>
        ))}
    </Box>
  );
};
