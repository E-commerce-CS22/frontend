import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { FC, Fragment } from "react";
import { darkGrey } from "../../../customization/theme/colors";
export const TableBodyWithoutDataView: FC<{
  withoutDataMessage?: React.ReactNode | string;
  isFilterApplied?: boolean;
}> = ({ withoutDataMessage, isFilterApplied = false }) => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        position: "absolute",
        textAlign: "center",
        width: 250,
        display: "block",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Box m="15px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="98.78"
          viewBox="0 0 130 98.78"
        >
          <path
            id="icons8-empty-box"
            d="M39.746,6a2.565,2.565,0,0,0-1.137.569L12.045,26.958l-.081.081h-.081a2.769,2.769,0,0,0-.569.406l-.081.081a1.212,1.212,0,0,0-.162.081v.081a2.466,2.466,0,0,0-.244.325,1.212,1.212,0,0,0-.081.162l-.081.081a2.824,2.824,0,0,0-.162.406L.267,49.054A2.6,2.6,0,0,0,3.76,52.547l6.661-3.331V102.18a2.6,2.6,0,0,0,2.6,2.6H91.086a2.715,2.715,0,0,0,.487-.081,2.287,2.287,0,0,0,.244-.081,2.562,2.562,0,0,0,.894-.487,9785.321,9785.321,0,0,0,.325-.325l.162-.244a1.228,1.228,0,0,0,.162-.162L113.831,77.81a2.614,2.614,0,0,0,.569-1.625V51.328l14.866-14.866a2.591,2.591,0,0,0,.325-3.168L114.4,8.031a2.565,2.565,0,0,0-.569-1.137,1.213,1.213,0,0,0-.081-.162h-.081a1.212,1.212,0,0,0-.081-.162h-.081a1.228,1.228,0,0,0-.162-.162,2.822,2.822,0,0,0-.569-.244,1.213,1.213,0,0,0-.162-.081h-.081A1.213,1.213,0,0,0,112.369,6H39.746Zm1.3,5.2h64.418l-15.6,15.6H20.656Zm70.267,1.625,12.835,21.283L107.089,51.166,94.254,29.883ZM15.62,31.995H88.4V99.581H15.62V45.317a1.738,1.738,0,0,0,0-.325ZM93.6,38.656l10.8,18.034a2.594,2.594,0,0,0,4.062.569l.731-.731V75.292l-15.6,19.5ZM10.421,40.443v2.924l-1.95.975Zm27.863,1.95a2.625,2.625,0,0,0,.731,5.2H65.01a2.6,2.6,0,1,0,0-5.2H38.284Z"
            transform="translate(0.014 -6)"
            fill={darkGrey}
          />
        </svg>
      </Box>
      {withoutDataMessage ? (
        <Typography
          fontSize="20px"
          color="#5B7798"
          // fontFamily="CoHeadlineTrial-Regular"
        >
          {withoutDataMessage}
        </Typography>
      ) : (
        <Fragment>
          <Typography fontSize="20px" color={darkGrey}>
            {isFilterApplied ? t("No Items Found") : t("No Items Added")}
          </Typography>
          <Typography fontSize="16px" color={darkGrey}>
            {isFilterApplied ? null : t("Start by adding data now")}
          </Typography>
        </Fragment>
      )}
    </Box>
  );
};
