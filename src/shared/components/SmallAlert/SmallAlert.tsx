import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { FC } from "react";
import { ToastProps } from "react-toast-notifications";
import { CustomIcon } from "../../components/CustomIcon";
import { useSmallAlertStyle } from "./styles";
import {
  mapAppearanceToCardColor,
  mapAppearanceToCardTitle,
  mapAppearanceToSelectedIcon,
} from "./util";

type CustomAlertProps = ToastProps;

const SmallAlert: FC<CustomAlertProps> = ({
  appearance,
  children,
  ...rest
}) => {
  const { t, i18n } = useTranslation();
  const direction = i18n.dir(i18n.language);
  const classes = useSmallAlertStyle({ direction });

  const handleOnClick = () => {
    rest.onDismiss();
  };
  return (
    <Box
      className={classes.mainBox}
      border={`1px solid ${mapAppearanceToCardColor(appearance)}`}
    >
      <Box
        className={classes.poleBox}
        sx={{
          background: mapAppearanceToCardColor(appearance),
        }}
      />
      <Box className={classes.iconContainer}>
        <CustomIcon
          icon={mapAppearanceToSelectedIcon(appearance)}
          width={37}
          height={37}
          color={mapAppearanceToCardColor(appearance)}
          viewBox="0 0 37 37"
        />
      </Box>
      <Box
        className={classes.iconTextContainer}
        color={mapAppearanceToCardColor(appearance)}
      >
        <Box className={classes.titleTextBox}>
          <Typography className={classes.titleText}>
            {" "}
            {mapAppearanceToCardTitle(appearance, t)}
          </Typography>
        </Box>
        <Box className={classes.description}>{children}</Box>
      </Box>
      <Box className={classes.xIconBox}>
        <Box onClick={handleOnClick} className={classes.xIcon}>
          <CustomIcon
            icon="xAlert"
            color={mapAppearanceToCardColor(appearance)}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default SmallAlert;
