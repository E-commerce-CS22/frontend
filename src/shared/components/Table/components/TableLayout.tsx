/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-handler-names */
import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
} from "@mui/icons-material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { SortDirection } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import React, { useMemo, useState } from "react";
import { useTableLayoutStyles } from "../styles/useTableLayoutStyles";
import { TableLayoutProps } from "../types";
import { TableBodyLayout } from "./TableBodyLayout";

const TableLayout = <RowType extends object>({
  data,
  columns,
  isLoading,
  pageSize,
  isDeleteVisible,
  isEditVisible,
  extraActionsRenderer,
  title,
  isRowDeletable,
  isRowEditable,
  onDeleteRow,
  onEditRow,
  onSortColumn,
  onRowClick: handleRowClick,
}: TableLayoutProps<RowType>) => {
  const { classes } = useTableLayoutStyles();
  const columnsToRender = useMemo(
    () => columns?.filter(({ isHidden }) => !isHidden),
    [columns]
  );
  const renderColumnHeader = (header) => {
    if (typeof header === "string") {
      return (
        <Typography
          component="span"
          fontFamily="CoHeadlineTrial-Regular, Arab Kufi Bold"
          fontSize="14px"
          className={classes.tableHeaderCell}
        >
          {header}
        </Typography>
      );
    }
    return header;
  };

  const handleDeleteRow = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: RowType
  ) => {
    event.stopPropagation();
    onDeleteRow?.(row);
  };
  const handleEditRow = (
    event: React.MouseEvent<HTMLButtonElement>,
    row: RowType
  ) => {
    event.stopPropagation();
    onEditRow?.(row);
  };
  const [columnsSort, setColumnsSort] = useState<{
    key: string;
    direction: SortDirection;
  }>();

  const nextSortDirection = (key: string) => {
    columnsSort?.direction === "asc" &&
    (columnsSort?.key === key || !columnsSort?.key)
      ? setColumnsSort({ key, direction: "desc" })
      : setColumnsSort({ key, direction: "asc" });
  };

  const handleSortColumn = (column) => () => {
    onSortColumn(column);
    nextSortDirection(column?.key);
  };

  return (
    <>
      <Table stickyHeader className={classes.table}>
        <TableHead className={classes.tableHead}>
          <TableRow className={classes.tableRow}>
            {columnsToRender.length !== 0
              ? columnsToRender?.map((column, index) => (
                  <TableCell
                    variant="head"
                    key={index}
                    className={classes.tableHeadCell}
                  >
                    {column.isSortable ? (
                      <TableSortLabel
                        direction={
                          column?.key === columnsSort?.key
                            ? columnsSort?.direction || "asc"
                            : "asc"
                        }
                        active={column?.key === columnsSort?.key}
                        className={classes.tableSortLabel}
                        IconComponent={
                          column?.key === columnsSort?.key
                            ? columnsSort?.direction
                              ? ArrowDropUpIcon
                              : ArrowDropDownIcon
                            : ArrowDropDownIcon
                        }
                        onClick={handleSortColumn(column)}
                      >
                        {renderColumnHeader(column.header)}
                      </TableSortLabel>
                    ) : (
                      renderColumnHeader(column.header)
                    )}
                  </TableCell>
                ))
              : Array(Math.floor(10))
                  .fill("")
                  .map((e, i) => (
                    <TableCell
                      key={`t-head-cell-${i}`}
                      className={classes.tableHeadCell}
                    />
                  ))}

            {columnsToRender.length !== 0 &&
              (isDeleteVisible || isEditVisible || extraActionsRenderer) && (
                <TableCell variant="head" className={classes.tableHeadCell} />
              )}
          </TableRow>
        </TableHead>

        <TableBody className={classes.tableBody}>
          <TableBodyLayout
            title={title}
            columnsToRender={columnsToRender}
            onEditRow={handleEditRow}
            onDeleteRow={handleDeleteRow}
            data={data}
            isDeleteVisible={isDeleteVisible}
            isEditVisible={isEditVisible}
            isLoading={isLoading}
            extraActionsRenderer={extraActionsRenderer}
            pageSize={pageSize}
            onRowClick={handleRowClick}
            isRowDeletable={isRowDeletable}
            isRowEditable={isRowEditable}
          />
        </TableBody>
      </Table>
    </>
  );
};

export default TableLayout;
