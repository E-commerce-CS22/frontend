import { CustomTableColumnProps, SortDirection } from "./types";

// TODO: Remove this file and use the one from @health/queries
export const nextSortDirection = (
  direction: SortDirection | undefined
): SortDirection | undefined => {
  return direction === "ASC" ? "DESC" : "ASC";
};

export const getNextSort = (
  direction: SortDirection | undefined
): SortDirection | undefined => {
  if (direction === "ASC") return "DESC";
  return direction === "DESC" ? undefined : "ASC";
};

export const handleSortGeneric =
  <T>(configs: {
    setColumns: (
      value: React.SetStateAction<CustomTableColumnProps<T>[]>
    ) => void;
    doSort: (sortColumnEnum: string) => void;
  }) =>
  (column: CustomTableColumnProps<T>): void => {
    const { setColumns, doSort } = configs;
    setColumns((c) =>
      c.map((_c) => {
        if (_c.key === column.key) {
          _c.sortDirection = getNextSort(_c.sortDirection);
        } else {
          _c.sortDirection = undefined;
        }
        return _c;
      })
    );
    doSort(column.sortColumnEnum);
  };

export default { nextSortDirection };
