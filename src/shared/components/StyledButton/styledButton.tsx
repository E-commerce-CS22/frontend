import { Button } from "@mui/material";

export const StyledButton = (props) => {
  return <Button {...props.styles}>{props.title}</Button>;
};
