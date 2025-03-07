import { ReactNode } from "react";

export type FormActionsProps = {
  isLoading?: boolean;
  loadingIndicators?: { save?: boolean };
  hasSave?: boolean;
  hasEdit?: boolean;
  hasCancel?: boolean;
  hasFormButton?: boolean;
  hasAddNewButton?: boolean;
  formButtonTitle?: string;
  TitleNewButton?: string;
  isSaveDisabled?: boolean;
  isEditDisabled?: boolean;
  onSave?: (data) => void;
  onEditItem?: (data) => void;
  onAddNewButton?: (data) => void;
  onNavigation?: () => void;
  isChanged?: boolean;
  newButtonDisabled?: boolean;
  children?: ReactNode;
};
