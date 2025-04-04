import Card, { CardProps } from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React, { FC } from "react";
import { makeStyles } from "tss-react/mui";
import { Loader } from "../ContentLoader";

const useFormCardStyles = makeStyles()({
  card: {
    boxShadow: "none",
    padding: "15px",
  },
  header: {
    height: 45,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

interface IFormCardProps extends CardProps {
  loading: boolean | undefined;
  children: React.ReactNode;
  title: string;
  doYouHaveData: boolean;
  action?: React.ReactNode;
}

export const FormCard: FC<IFormCardProps> = ({
  children,
  loading,
  title,
  doYouHaveData,
  action,
  ...props
}) => {
  const { classes } = useFormCardStyles();

  return (
    <Card className={classes.card} {...props}>
      <Grid2 container spacing={1}>
        <Grid2 item xs={12} className={classes.header}>
          <Typography
            fontSize={16}
            fontWeight={"bold"}
            fontFamily={"CoHeadlineTrial-Light, Arab Kufi Medium"}
          >
            {title}
          </Typography>
          {action}
        </Grid2>
        <Grid2 item xs={12}>
          <div>
            {loading ? (
              <Loader />
            ) : (
              doYouHaveData && <React.Fragment>{children}</React.Fragment>
            )}
          </div>
        </Grid2>
      </Grid2>
    </Card>
  );
};
