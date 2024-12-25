/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { default as React, FC, useEffect } from "react";
import { useBreadcrumbsStyles } from "./Breadcrumbs.styles";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

export const breadcrumbTitleVar = "";
const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const { data } = props;
  const classes = useBreadcrumbsStyles();
  const { t } = useTranslation("Store");
  const [breadcrumbTitle, setBreadcrumbTitle] = React.useState("");
  useEffect(() => {
    setBreadcrumbTitle("");
  }, [data]);
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {!!data?.length &&
        data?.map((item, index) => {
          const { id, name, fullPath, onClick } = item;
          const handleItemClicked = () => {
            onClick && onClick(fullPath as string);
          };

          if (index < data?.length - 1) {
            return (
              <Link
                key={id}
                underline="hover"
                color="inherit"
                className={classes.link}
                onClick={handleItemClicked}
              >
                {t(name as string)}
              </Link>
            );
          } else {
            return (
              <Typography key={id} className={classes.text}>
                {t(name as string)}
              </Typography>
            );
          }
        })}
      {breadcrumbTitle && (
        <Typography className={classes.text}>{breadcrumbTitle}</Typography>
      )}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
