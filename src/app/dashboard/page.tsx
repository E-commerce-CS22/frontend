"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Card, Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonCardStyles } from "./dashboardStyles";
import Image from "next/image";
export default function Dashboard() {
  const { t } = useTranslation("Store");

  const classes = commonCardStyles();

  return (
    <PageWrapper>
      <div className={classes.root}>
        <Card className={classes.card}>
          <div className={classes.header}>
            <div className={classes.container}>
              <Typography gutterBottom className={classes.headerIcon}>
                <Image width={"150"} height={"150"} src={"/smartStore1.png"} alt={"Smart store logo" }/>
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
          </div>
        </Card>
      </div>
    </PageWrapper>
  );
}
