import Card, { CardProps } from "@mui/material/Card";
import Grid from "@mui/material/Grid";
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
      <Grid container spacing={1}>
        <Grid item xs={12} className={classes.header}>
          <Typography
            fontSize={16}
            fontFamily={"CoHeadlineTrial-Light, Arab Kufi Medium"}
          >
            {title}
          </Typography>
          {action}
        </Grid>
        <Grid item xs={12}>
          <div>
            {loading ? (
              <Loader />
            ) : (
              doYouHaveData && <React.Fragment>{children}</React.Fragment>
            )}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};
