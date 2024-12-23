/* eslint-disable @typescript-eslint/no-empty-object-type */
import { SxProps, TableCellProps } from "@mui/material";
import { ReactNode } from "react";
import { CustomTableFooterProps } from "./components/types";

export interface CustomTableProps<RowType extends CustomTableRowProps>
  extends CustomTableFooterProps {
  data: RowType[];
  columns: CustomTableColumnProps<RowType>[];
  minHeight?: number;
  isLoading?: boolean;
  isEditVisible?: boolean;
  isDeleteVisible?: boolean;
  isRowEditable?: boolean | ((row: RowType) => boolean);
  isRowDeletable?: boolean | ((row: RowType) => boolean);
  onEditRow?: (row: RowType) => void;
  onRowClick?: (row: RowType) => void;
  onDeleteRow?: (row: RowType) => void;
  onSortColumn?: (column: CustomTableColumnProps<RowType>) => void;
  extraActionsRenderer?: (row: RowType) => ReactNode;
  onGoToNext?: () => void;
  onGoToPrevious?: () => void;
  withoutDataMessage?: ReactNode;
  title?: string | undefined;
  tableContainerSx?: SxProps;
  // onUpdateRow?: (row: RowType) => void;
  // saveFilterData?;
  // onToggleAllColumnsVisibility?: (row) => void;
  // onToggleColumnVisibility?: (row) => void;
  // onExportData?: () => void;
  // fetchMore?: (row) => void;
  // onTrackData?: (row) => void;
  // saveSaveFilterData?: (row) => void;
  onAddNewItem?: () => void;
  // hasExport?: boolean;
  // hasFilters?: boolean;
  // hasSettings?: boolean;
  hasAddNew?: boolean;
  // FilterComponent?;
  // accessor?: string;
  // activeTab?: string;
  totalCount?: number | undefined | null;
  hasFooter?: boolean;
  showRecordsNumberForm?: boolean;
  // footerHeight?: number;
}

export interface CustomTableRowProps {
  isSelected?: boolean;
  onSelect?: (row: CustomTableRowProps) => void;
}

export interface CustomTableColumnProps<RowType = {}> {
  key: string;
  header: ReactNode;
  isHidden?: boolean;
  isSortable?: boolean;
  type?: "number" | "string";
  sortDirection?: SortDirection;
  accessor: string | ((data: RowType) => ReactNode);
  hideFromSettings?: boolean;
  disableToggleVisibility?: boolean;
  sortColumnEnum?;
  filter?: string;
  sx?: TableCellProps["sx"];
}

export type SortDirection = "DESC" | "ASC" | false;

export interface TableLayoutProps<RowType extends CustomTableRowProps> {
  data: RowType[];
  columns: CustomTableColumnProps<RowType>[];
  onRowClick?: (row: RowType) => void;
  onDeleteRow?: (row: RowType) => void;
  isLoading?: boolean;
  isEditVisible?: boolean;
  isDeleteVisible?: boolean;
  onEditRow: (row: RowType) => void;
  isRowEditable?: boolean | ((row: RowType) => boolean);
  isRowDeletable?: boolean | ((row: RowType) => boolean);
  onSortColumn: (column: CustomTableColumnProps<RowType>) => void;
  pageSize: number;
  columnsToRenders?;
  extraActionsRenderer;
  title?: string | undefined;
}
