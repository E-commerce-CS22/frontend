import Card from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import React, { ReactElement, useEffect, useState } from "react";
import { TableBodyWithoutDataView } from "./components/TableBodyWithoutDataView";
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
  withoutDataMessage,
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
  const [dataStatus, setDataStatus] = useState<
    "loading" | "loaded" | "updated"
  >("loading");
  useEffect(() => {
    if (isLoading) return;
    if (data.length) {
      setDataStatus((status) => (status === "loading" ? "loaded" : "updated"));
    }
  }, [data, isLoading]);
  return (
    <Card
      sx={{
        position: "relative",
        boxShadow: boxShadow,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: tableOutlineBorder,
        overflow: "auto",
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
      {data?.length === 0 && !isLoading && (
        <TableBodyWithoutDataView
          withoutDataMessage={withoutDataMessage}
          isFilterApplied={dataStatus === "updated"}
        />
      )}
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
