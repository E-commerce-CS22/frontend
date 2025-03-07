/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Create as CreateIcon,
  DeleteForever as DeleteForeverIcon,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { TableBodyLoader } from "../../ContentLoader";
import { DeleteConfirmationDialog } from "../../Dialogs/DeleteConfirmationDialog";
import { useTableBodyLayoutStyles } from "../styles/useTableBodyLayoutStyles";
import { CustomTableColumnProps } from "../types";
import { TableBodyLayoutProps } from "./types";

export const TableBodyLayout = <RowType extends object>({
  isLoading,
  data,
  isEditVisible,
  isRowDeletable = () => true,
  isRowEditable = () => true,
  pageSize,
  columnsToRender,
  onRowClick,
  extraActionsRenderer,
  onEditRow,
  onDeleteRow,
  isDeleteVisible,
}: TableBodyLayoutProps) => {
  const classes = useTableBodyLayoutStyles();
  const [rowToBeDeleted, setRowToBeDeleted] = useState<null | RowType>(null);

  const renderCell = (
    row: RowType,
    column: CustomTableColumnProps<RowType>
  ) => {
    if (typeof column.accessor === "string") {
      return (
        <Typography
          component="span"
          // fontFamily="CoHeadlineTrial-Light"
          fontSize="14px"
          width={"max-content"}
        >
          {row[column.accessor]}
        </Typography>
      );
    }
    return (
      <Typography
        component="span"
        // fontFamily="CoHeadlineTrial-Light"
        fontSize="14px"
        width={"max-content"}
      >
        {column.accessor && column.accessor(row)}
      </Typography>
    );
  };

  const handleOpenDeleteDialog = (row?: RowType | null) => () => {
    setRowToBeDeleted(row ? row : null);
  };

  const handleClose = () => {
    setRowToBeDeleted(null);
  };
  const handleDeleteConfirmation = () => {
    onDeleteRow(null, rowToBeDeleted);
    setRowToBeDeleted(null);
  };
  const handleRowClick = (row) => {
    onRowClick(row);
  };

  const getBooleanValueFn = (
    predicate: boolean | ((row?: unknown) => boolean)
  ) => {
    return typeof predicate === "function"
      ? predicate
      : () => Boolean(predicate);
  };

  return (
    <>
      {data && !isLoading ? (
        data?.map((row: any, index) => {
          const _isRowDeletable = getBooleanValueFn(isRowDeletable)(row);
          const _isRowEditable = getBooleanValueFn(isRowEditable)(row);
          return (
            <TableRow
              key={`${index}`}
              hover
              classes={{
                hover: classes.tableRowHover,
              }}
              onClick={handleRowClick.bind(null, row)}
              className={classes.tableRow}
              sx={{
                position: "relative",
                fontFamily: "CoHeadlineTrial-Light",
              }}
            >
              {columnsToRender?.map((column, index) => (
                <TableCell className={classes.cell} key={index} sx={column.sx}>
                  {renderCell(row, column)}
                </TableCell>
              ))}
              {columnsToRender.length !== 0 &&
                (isDeleteVisible || isEditVisible || extraActionsRenderer) && (
                  <TableCell
                    className={`${classes.cell} ${classes.actionsCell}`}
                  >
                    {isEditVisible && (
                      <IconButton
                        // eslint-disable-next-line react/jsx-handler-names
                        onClick={(event) => onEditRow(event, row)}
                        disabled={!_isRowEditable}
                        sx={{
                          // fontFamily:
                          //   "CoHeadlineTrial-Regular, Arab Kufi Regular",
                          fontSize: "18px",
                          height: 30,
                          width: 30,
                        }}
                      >
                        <CreateIcon fontSize="inherit" />
                      </IconButton>
                    )}
                    {isDeleteVisible && (
                      <IconButton
                        color="error"
                        onClick={handleOpenDeleteDialog(row)}
                        disabled={!_isRowDeletable}
                        sx={{
                          // fontFamily:
                          // "CoHeadlineTrial-Regular, Arab Kufi Regular",
                          fontSize: "18px",
                          height: 30,
                          width: 30,
                        }}
                      >
                        <DeleteForeverIcon
                          fontSize="inherit"
                          className={classes.delete}
                        />
                      </IconButton>
                    )}
                    {extraActionsRenderer && extraActionsRenderer(row)}
                  </TableCell>
                )}
            </TableRow>
          );
        })
      ) : (
        <TableBodyLoader
          numberOfColumns={columnsToRender.length}
          numberOfRows={pageSize}
        />
      )}

      {rowToBeDeleted && (
        <DeleteConfirmationDialog
          rowToBeDeleted={rowToBeDeleted}
          onClose={handleClose}
          onDeleteRow={handleDeleteConfirmation}
        />
      )}
    </>
  );
};
