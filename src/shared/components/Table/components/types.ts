import { SxProps } from "@mui/material";

export interface CustomTableFooterProps {
  pageSize: number;
  totalCount?: number | null;
  pageIndex: number;
  pagesCount?: number | undefined | null;
  footerHeight?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  tableContainerSx?: SxProps;
  onGotoPage?: (pageIndex: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  onGoToNext?: () => void;
  onGoToPrevious?: () => void;
  showRecordsNumberForm?: boolean;
}

export interface TableBodyLayoutProps {
  isLoading: boolean | undefined;
  data;
  isEditVisible;
  pageSize;
  columnsToRender;
  onRowClick;
  extraActionsRenderer;
  onEditRow;
  onDeleteRow;
  isDeleteVisible;
  isRowEditable?: boolean | ((row) => boolean);
  isRowDeletable?: boolean | ((row) => boolean);
  title?: string | undefined;
}
