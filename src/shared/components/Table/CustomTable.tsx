import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import React, { ReactElement } from "react";
import CustomTableFooter from "./components/TableFooter";
import TableLayout from "./components/TableLayout";
import { CustomTableProps } from "./types";
import { boxShadow, tableOutlineBorder } from "@/shared/customization";
const noop = () => undefined;

const CustomTable = <RowType extends object>({
  data = [],
  columns,
  extraActionsRenderer,
  footerHeight = 60,
  hasFooter = true,
  hasNextPage,
  hasPreviousPage,
  isDeleteVisible,
  isEditVisible,
  isRowDeletable,
  isRowEditable,
  isLoading,
  pageIndex = 0,
  pagesCount = 0,
  pageSize = 10,
  totalCount,
  title,
  onDeleteRow: handleDeleteRow = noop,
  onEditRow: handleEditRow = noop,
  onGoToNext: handleGoToNext,
  onGotoPage: handleGotoPage,
  onGoToPrevious: handleGoToPrevious,
  onPageSizeChange: handlePageSizeChange,
  onRowClick: handleRowClick = noop,
  onSortColumn: handleSortColumn = noop,
  tableContainerSx,
  showRecordsNumberForm,
}: CustomTableProps<RowType>): ReactElement => {
  return (
    <Card
      sx={{
        position: "relative",
        boxShadow: boxShadow,
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: tableOutlineBorder,
        overflow: "auto",
        height: "100%",
      }}
      elevation={0}
      id="ui-table"
    >
      <>
        <TableContainer
          sx={
            tableContainerSx && {
              minHeight: "500px",
              scrollbarWidth: "none",
              maxHeight: "calc(100vh - 222px)",
              overflowX: "auto",
              position: "relative",
            }
          }
        >
          <TableLayout
            title={title}
            data={data}
            columns={columns}
            isLoading={isLoading}
            pageSize={pageSize}
            isDeleteVisible={isDeleteVisible}
            isEditVisible={isEditVisible}
            onRowClick={handleRowClick}
            onDeleteRow={handleDeleteRow}
            onEditRow={handleEditRow}
            isRowEditable={isRowEditable}
            isRowDeletable={isRowDeletable}
            onSortColumn={handleSortColumn}
            extraActionsRenderer={extraActionsRenderer}
          />
        </TableContainer>
      </>
      {hasFooter && (
        <CustomTableFooter
          footerHeight={footerHeight}
          pageSize={pageSize}
          totalCount={totalCount}
          pageIndex={pageIndex}
          pagesCount={pagesCount}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          showRecordsNumberForm={showRecordsNumberForm}
          onGotoPage={handleGotoPage}
          onPageSizeChange={handlePageSizeChange}
          onGoToNext={handleGoToNext}
          onGoToPrevious={handleGoToPrevious}
        />
      )}
    </Card>
  );
};

export default CustomTable;
