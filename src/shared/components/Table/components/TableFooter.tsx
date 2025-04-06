/* eslint-disable @typescript-eslint/no-unused-vars */
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import React from "react";
import { ArrowButton, PrevButton } from "./../../icons";
import { useTableFooterStyles } from "../styles/useTableFooterStyles";
import { CustomTableFooterProps } from "./types";

const noop = () => undefined;

const CustomTableFooter: React.FC<CustomTableFooterProps> = (props) => {
  const {
    // totalCount,
    pageSize,
    footerHeight = 60,
    pageIndex = 0,
    hasNextPage = false,
    hasPreviousPage = false,
    onPageSizeChange = noop,
    onGotoPage = noop,
    onGoToNext = noop,
    onGoToPrevious = noop,
    showRecordsNumberForm = false,
  } = props;
  const { t } = useTranslation();

  const classes = useTableFooterStyles();

  const handleGoToNextPage = () => {
    onGotoPage(pageIndex + 1);
    onGoToNext();
  };
  const handleGoToPreviousPage = () => {
    onGotoPage(pageIndex - 1);
    onGoToPrevious();
  };
  const direction = i18next.language === "en" ? "ltr" : "rtl";
  const previousArrowIcon =
    direction === "ltr" ? (
      <PrevButton color="inherit" className={classes.buttonIcons} />
    ) : (
      <ArrowButton color="inherit" className={classes.buttonIcons} />
    );
  const nextArrowIcon =
    direction === "ltr" ? (
      <ArrowButton color="inherit" className={classes.buttonIcons} />
    ) : (
      <PrevButton color="inherit" className={classes.buttonIcons} />
    );
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      {/* <Grid item>
        <Typography fontFamily='Airbnb Cereal App' fontSize='14px' className={classes.result}>
          {t("We found {{totalCount}} results", { totalCount: totalCount || 0 })}
        </Typography>
      </Grid> */}
      <Grid item>
        <Button
          variant={"outlined"}
          disabled={!hasPreviousPage}
          className={classes.prevIconButton}
          onClick={handleGoToPreviousPage}
          startIcon={previousArrowIcon}
          sx={{
            "& .MuiButton-startIcon": {
              marginRight: "4px",
            },
          }}
        >
          {t("Previous")}
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant={"contained"}
          color="primary"
          disabled={!hasNextPage}
          className={classes.nextIconButton}
          onClick={handleGoToNextPage}
          endIcon={nextArrowIcon}
          sx={{
            "& .MuiButton-endIcon": {
              marginLeft: "4px",
            },
          }}
        >
          {t("Next")}
        </Button>
      </Grid>

      {showRecordsNumberForm && (
        <Grid item className={classes.pageSizeContainer}>
          <Typography className={classes.columns}>
            {t("Records", "Records")}
          </Typography>
          <Select
            variant="filled"
            value={pageSize}
            className={classes.pageSize}
            // eslint-disable-next-line react/jsx-handler-names
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            IconComponent={KeyboardArrowDownIcon}
            classes={{
              filled: classes.pageSizeSelect,
              icon: classes.pageSelectIcon,
            }}
            disableUnderline
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </Grid>
      )}
    </Grid>
  );
};

export default CustomTableFooter;
