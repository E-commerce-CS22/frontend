import Grid2 from "@mui/material/Grid2";
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
    <Grid2
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
      }}
    >
      <Grid2
        item
        lg={4}
        md={6}
        sm={12}
        paddingTop={"5px"}
        paddingBottom={"5px"}
      >
        {start}
      </Grid2>
      <Grid2
        item
        lg={8}
        md={6}
        sm={12}
        sx={{ textAlign: "end" }}
        paddingTop={"5px"}
        paddingBottom={"5px"}
      >
        {actions}
      </Grid2>
    </Grid2>
  );
  return (
    <Grid2
      container
      item
      sx={{
        position: "relative",
        justifyContent: "space-evenly",
        alignItems: "stretch",
        minHeight: "100%",
        flexDirection: "column",
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      {toolBar}
      {header}

      <Grid2
        item
        xs
        sx={{
          padding: padding ? padding : "40px",
          minHeight: 50,
          position: "relative",
          flex: "1 1 auto !important",
          paddingBottom: shouldRemoveBottomPadding ? "0px" : "unset",
        }}
      >
        {children}
      </Grid2>
    </Grid2>
  );
};

export default PageWrapper;
