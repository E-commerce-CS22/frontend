"use client";
import React from "react";
import { CustomAccordion, MainHeader } from "./components";
import { useTranslation } from "react-i18next";
import { Grid, Divider, Typography } from "@mui/material";

export default function AboutUs() {
  const { t } = useTranslation("Store");

  return (
    <Grid container spacing={2} sx={{ marginBottom: "115px" }}>
      <Grid item xs={12}>
        <MainHeader />
      </Grid>
      <Grid item xs={12}>
        <Divider>
          <Typography
            variant="h6"
            fontFamily={"CoHeadlineTrial-Light,Arab Kufi Regular"}
            color="primary"
            fontWeight={"bold"}
          >
            {t("Smart Store")}{" "}
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <CustomAccordion
          question={t("Can I manage multiple orders at the same time?")}
          description={t(
            "Yes, the system allows you to handle multiple customer orders simultaneously, making order processing more efficient."
          )}
          expanded={true}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomAccordion
          question={t("Can I manage multiple orders at the same time?")}
          description={t(
            "Yes, the system allows you to handle multiple customer orders simultaneously, making order processing more efficient."
          )}
          expanded={true}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomAccordion
          question={t("Can I manage multiple orders at the same time?")}
          description={t(
            "Yes, the system allows you to handle multiple customer orders simultaneously, making order processing more efficient."
          )}
          expanded={true}
        />
      </Grid>
      <Grid item xs={12}>
        <CustomAccordion
          question={t("Can I manage multiple orders at the same time?")}
          description={t(
            "Yes, the system allows you to handle multiple customer orders simultaneously, making order processing more efficient."
          )}
          expanded={true}
        />
      </Grid>
    </Grid>
  );
}
// export default function Something() {
//   return (
//     <div>
//       <MainHeader />
//       <Grid item xs={12}>
//         <CustomAccordion
//           question={t(
//             "Will I be notified when the prescription will be refilled?"
//           )}
//           description={t("Yes, you will be notified by (...)")}
//         />
//       </Grid>
//     </div>
//   );
// }
