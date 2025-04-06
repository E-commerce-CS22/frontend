import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import React, { FC } from "react";
import { commonCardStyles } from "./CommonCard.styles";
import { CommonCardProps } from "./CommonCard.types";
import { SmartLogo2 } from "../icons";
import { useTranslation } from "react-i18next";

const ComingSoonCard: FC<CommonCardProps> = ({ classes, handleClick }) => {
  const { t } = useTranslation("Store");

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div className={classes.header}>
          <div className={classes.container}>
            <Typography gutterBottom className={classes.headerIcon}>
              <SmartLogo2 sx={{ width: "unset", height: "unset" }} />
            </Typography>
            <Box textAlign='center'>
              <Typography variant='body2' className={classes.gutterBottom} gutterBottom>
                <strong>{t("Coming Soon!")}</strong>
              </Typography>
              <Typography variant='body2' className={classes.subGutter}>
                {t("We will be with you very soon!")}
              </Typography>
              <Divider variant='middle' className={classes.divider} />
              <Typography variant='body2' className={classes.subGutter2}>
                {t("Enjoy with us with other services and marketplaces")}
              </Typography>
            </Box>
          </div>

          <Button className={classes.button} onClick={handleClick}>
            {t("Back To Home")}
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default withStyles(commonCardStyles)(ComingSoonCard);
