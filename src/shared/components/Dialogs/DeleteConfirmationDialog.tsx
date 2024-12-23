import { useTranslation } from "react-i18next";
import React from "react";
import { WarningConfirmationDialog } from "./WarningConfirmationDialog";

export interface DeleteConfirmationDialogProps<RowType extends object> {
  rowToBeDeleted: RowType | null | undefined;
  onDeleteRow: (row: RowType) => void;
  onClose: () => void;
}

export const DeleteConfirmationDialog = <RowType extends object>({
  rowToBeDeleted,
  onDeleteRow,
  onClose: handleClose,
}: DeleteConfirmationDialogProps<RowType>) => {
  const { t } = useTranslation();
  const handleDeleteConfirmation = () => {
    if (rowToBeDeleted) {
      onDeleteRow(rowToBeDeleted);
    }
    handleClose();
  };
  const isOpen = !!rowToBeDeleted;

  return (
    <WarningConfirmationDialog
      isOpen={isOpen}
      titleText={t("Delete Confirmation")}
      bodyText={t("Are you sure you want to delete this item?")}
      confirmText={t("Delete")}
      cancelText={t("cancel")}
      onClose={handleClose}
      onConfirm={handleDeleteConfirmation}
    />
  );
};

export default DeleteConfirmationDialog;
