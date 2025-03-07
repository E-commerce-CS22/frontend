import { FormControlLabel, FormControlLabelProps } from "@mui/material";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { CustomToggleButton } from "../ToggleButton";

type ToggleButtonControllerProps = {
  defaultValue;
  name;
  control;
  label;
  formControlLabelProps?: Omit<FormControlLabelProps, "control" | "label">;
};
export const ToggleButtonController: FC<ToggleButtonControllerProps> = ({
  defaultValue,
  name,
  control,
  label,
  formControlLabelProps = {},
}) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange: handleChange, value } }) => (
        <FormControlLabel
          {...formControlLabelProps}
          control={
            <CustomToggleButton
              onChange={(e) => handleChange(e.target.checked)}
              checked={value}
            />
          }
          label={label}
        />
      )}
    />
  );
};
