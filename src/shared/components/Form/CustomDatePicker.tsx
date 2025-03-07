/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TextFieldProps } from "@mui/material";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { FC } from "react";

export type CustomDatePickerProps = Omit<TextFieldProps, "variant"> & {
  label: string;
  name: string;
  placeholder?: string;
  control?: any;
  register?: any;
  format?: string;
  helperText?: string;
  error?: string | boolean;
  controllerProps?: Omit<ControllerProps, "render" | "name">;
  datePickerProps?: Omit<
    React.ComponentProps<typeof DatePicker>,
    "onChange" | "value"
  >;
};

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  format = "YYYY-MM-DD",
  label,
  name,
  placeholder,
  helperText,
  // error,
  controllerProps,
  register,
  ...props
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={controllerProps?.control || control}
        defaultValue={controllerProps?.defaultValue || props.defaultValue}
        rules={controllerProps?.rules}
        render={({ field: { onChange, value } }) => {
          const handleSelectedDate = (date: Dayjs | null) => {
            onChange(date?.isValid() ? date.format(format) : null);
          };

          return (
            <DatePicker
              label={label}
              value={value ? dayjs(value, format) : null}
              onChange={handleSelectedDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  label,
                  error: Boolean(errors?.[name]?.message),
                  helperText: errors?.[name]?.message
                    ? String(errors[name]?.message)
                    : helperText,
                  placeholder,
                  required: props.required,
                  sx: {
                    "& .MuiFormHelperText-root": {
                      color: errors?.[name]?.message ? "#973149" : "primary",
                    },
                    "& .MuiInputLabel-root": {
                      color: errors?.[name]?.message ? "#973149" : "primary",
                    },
                  },
                  ...register?.(name),
                },
              }}
              {...props.datePickerProps}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};
