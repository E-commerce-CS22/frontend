import { FormControlLabel, FormGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import React, { FC } from "react";
import { ToggleButtonProps } from "./types";

const IOSSwitch = styled((props: SwitchProps) => <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />)(
  ({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 3,
      margin: 0,
      height: "100%",
      transitionDuration: "300ms",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(19px)",
        "& + .MuiSwitch-track": {
          opacity: 1,
          border: 0,
          "&:hover": {
            backgroundColor: theme.palette.success.light,
          },
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.5 : 0.3,
        backgroundColor: "#C9D5E2",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .MuiSwitch-input": {
      height: "100%",
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 16,
      height: 16,
      boxShadow: "0px 2px 2px #0000003d",
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#C9D5E2",
      opacity: 1,
      "&:hover": {
        backgroundColor: "#c9d5e28c",
      },
    },
    "&:hover": {
      "& .MuiSwitch-track": {
        backgroundColor: "#c9d5e28c",
      },
      "& .Mui-checked + .MuiSwitch-track": {
        backgroundColor: theme.palette.success.light,
      },
    },
  })
);

const CustomToggleButton: FC<ToggleButtonProps> = ({ color = "success", formGroupProps, formControlLabelProps, ...props }) => {
  return (
    <FormGroup
      sx={{
        "& .MuiFormControlLabel-root": {
          margin: "auto",
        },
      }}
      {...formGroupProps}
    >
      <FormControlLabel label='' {...formControlLabelProps} control={<IOSSwitch sx={{ m: 1 }} color={color} {...props} />} />
    </FormGroup>
  );
};

export default CustomToggleButton;
