import { Grid } from "@mui/material";
import React, { FC, ReactNode } from "react";

type PageWrapperProps = {
  actions?: ReactNode;
  start?: ReactNode;
  header?: ReactNode;
  shouldRemoveBottomPadding?: boolean;
  children: ReactNode;
  padding?: string;
};

const PageWrapper: FC<PageWrapperProps> = (props) => {
  const {
    actions,
    children,
    start,
    header,
    shouldRemoveBottomPadding = false,
    padding,
  } = props;
  const toolBar = (
    <Grid
      container
      alignItems="center"
      sx={{
        backgroundColor: "#fff" + " !important",
        position: "sticky",
        alignContent: "center",
        zIndex: 10,
        margin: 0,
        top: 0,
        px: 2,
        width: "initial",
      }}
    >
      <Grid item lg={4} md={6} sm={12} paddingTop={"5px"} paddingBottom={"5px"}>
        {start}
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        sm={12}
        sx={{ textAlign: "end" }}
        paddingTop={"5px"}
        paddingBottom={"5px"}
      >
        {actions}
      </Grid>
    </Grid>
  );
  return (
    <Grid
      container
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        minHeight: "100%",
        flexDirection: "column",
        display: "flex",
        flex: "1 1 auto",
        overflowX: "auto",
      }}
    >
      {toolBar}
      {header}

      <Grid
        sx={{
          padding: padding ? padding : "40px",
          minHeight: 50,
          position: "relative",
          flex: "1 1 auto !important",
          paddingBottom: shouldRemoveBottomPadding ? "0px" : "unset",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
