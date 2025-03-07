import { Box, Button } from "@mui/material";
import { styled } from "@mui/styles";

export const StyledButton = styled(Button)(() => ({
  minWidth: "fit-content",
  margin: "10px 5px",
  "&:hover": {
    "& svg > path": {
      // fill: "white",
    },
  },
}));

export const FormActionsWrapperStyled = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));
