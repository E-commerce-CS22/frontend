import React, { FC, useState } from "react";
import { PlusIcon } from "../icons";
import { CustomDialog } from "../CustomDialog";
import { FormActionsWrapperStyled, StyledButton } from "./FormActions.styles";
import { FormActionsProps } from "./types";
import { useTranslation } from "react-i18next";

export const FormActions: FC<FormActionsProps> = (props) => {
  const { t } = useTranslation("Store");

  const {
    children,
    isLoading,
    loadingIndicators,
    hasSave,
    isSaveDisabled = false,
    isEditDisabled = false,
    hasEdit,
    hasCancel,
    hasFormButton,
    hasAddNewButton,
    formButtonTitle,
    TitleNewButton,
    isChanged,
    newButtonDisabled,
    onSave: handleSave,
    onEditItem: handleEditItem,
    onAddNewButton: handleAddNewButton,
    onNavigation: handleNavigation,
  } = props;
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    if (isChanged) {
      setOpen(true);
    } else {
      handleNavigation?.();
    }
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <FormActionsWrapperStyled>
      <div>
        {children}
        {hasEdit && (
          <StyledButton
            color="success"
            disabled={isEditDisabled}
            size="medium"
            type="submit"
            startIcon={<PlusIcon color="inherit" />}
            onClick={handleEditItem}
          >
            {t("Update")}
          </StyledButton>
        )}

        {hasAddNewButton && (
          <StyledButton
            color="warning"
            size="medium"
            type="submit"
            startIcon={<PlusIcon color="inherit" />}
            onClick={handleAddNewButton}
            // disabled={newButtonDisabled}
          >
            {TitleNewButton}
          </StyledButton>
        )}
        {!isLoading && hasFormButton && (
          <StyledButton
            color="primary"
            size="medium"
            type="submit"
            disabled={newButtonDisabled}
            variant="contained"
            onClick={handleSave}
          >
            {formButtonTitle}
          </StyledButton>
        )}
        {hasSave && (
          <StyledButton
            color="success"
            size="medium"
            type="submit"
            startIcon={<PlusIcon color="inherit" />}
            onClick={handleSave}
            disabled={isSaveDisabled}
          >
            {loadingIndicators?.save ? t("Saving...") : t("Save")}
          </StyledButton>
        )}
      </div>
      {hasCancel && (
        <>
          <CustomDialog
            title="Cancel Edit "
            open={open}
            submitTitle={t("Ok")}
            onConfirm={handleNavigation}
            onCloseModal={handleToggle}
            button={
              <StyledButton
                variant="outlined"
                size="medium"
                onClick={handleCancel}
              >
                {t("Cancel")}
              </StyledButton>
            }
          >
            {t("Are you sure you want to cancel editing fields")}?
          </CustomDialog>
        </>
      )}
    </FormActionsWrapperStyled>
  );
};
