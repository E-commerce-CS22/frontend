import { CustomDialog } from "@/shared/components/CustomDialog";
import { Box, Button, DialogActions, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { darkGrey } from "@/shared/customization";

export const DeleteModel = (props) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { id } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleDelete = () => {
    console.log(id ? id : "");
  };
  return (
    <Box>
      <CustomDialog
        title={t("Description")}
        open={open}
        onCloseModal={handleClickOpen}
        maxWidth="sm"
        button={
          <Delete
            sx={{ cursor: "pointer", color: darkGrey }}
            onClick={handleClickOpen}
          />
        }
      >
        <Box>
          <Typography color="warning" fontWeight={"bold"}>
            {t("Are you sure you want to delete the product!")}
          </Typography>
          <DialogActions>
            <Button color="error" variant="contained" onClick={handleDelete}>
              {t("Delete")}
            </Button>
            <Button
              color="success"
              variant="contained"
              onClick={handleClickOpen}
            >
              {t("Cancel")}
            </Button>
          </DialogActions>
        </Box>
      </CustomDialog>
    </Box>
  );
};
