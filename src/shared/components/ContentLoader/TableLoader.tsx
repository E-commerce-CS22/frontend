/* eslint-disable @typescript-eslint/no-explicit-any */
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { FC } from "react";
import ContentLoader from "react-content-loader";
import { TableBodyLoaderProps } from "./types";

export const TableCellLoader: FC<any> = props => {
  return (
    <ContentLoader height={50} width={"100%"} speed={2} {...props}>
      <rect x='0' y='5' rx='6' ry='6' width={"calc(100% - 20px)"} height='40' />
    </ContentLoader>
  );
};
export const TableBodyLoader: FC<TableBodyLoaderProps> = props => {
  const { numberOfRows, numberOfColumns } = props;

  const data = Array(Math.floor(numberOfRows - numberOfRows / 3) || 5).fill("");
  const cellData = Array(numberOfColumns < 0 ? 5 : numberOfColumns).fill("");

  return (
    <React.Fragment>
      {!!data?.length &&
        data.map((e, i) => (
          <TableRow key={i}>
            {!!cellData?.length &&
              cellData.map((e, index) => (
                <TableCell key={`t-cell-${index}`}>
                  <TableCellLoader key={`cell-loader-${index}`} />
                </TableCell>
              ))}
          </TableRow>
        ))}
    </React.Fragment>
  );
};
