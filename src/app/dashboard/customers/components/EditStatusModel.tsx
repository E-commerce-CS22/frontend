/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomDialog } from "@/shared/components/CustomDialog";
import {
  Autocomplete,
  Box,
  Button,
  DialogActions,
  Grid2,
  TextField,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { darkGrey } from "@/shared/customization";

export const EditStatusModel = (props) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { id, refetch } = props;
  console.log(refetch);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  console.log(id);

  const handleStatusChange = () => {};
  const statuses = ["Active", "Inactive"];
  return (
    <Box>
      <CustomDialog
        title={t("Edit Status")}
        open={open}
        onCloseModal={handleClickOpen}
        maxWidth="sm"
        button={
          <Edit
            sx={{ cursor: "pointer", color: darkGrey }}
            onClick={handleClickOpen}
          />
        }
        sx={{ fontFamily: "CoHeadlineTrail-Bold" }}
      >
        <Grid2 p={"1rem"} sx={{ minWidth: "400px" }}>
          <Autocomplete
            options={statuses}
            multiple={true}
            onChange={handleStatusChange as any}
            // defaultValue={statuses}
            id="status"
            filterSelectedOptions
            getOptionLabel={(option: any) => {
              return t(option);
            }}
            renderInput={(params) => (
              <TextField {...params} label={t("Status")} />
            )}
            sx={{
              fontFamily: "CoHeadlineTrial-Light",
            }}
          />
        </Grid2>
        <DialogActions sx={{ fontFamily: "inherit" }}>
          <Button
            variant="contained"
            sx={{ fontFamily: "CoHeadlineTrial-Light" }}
          >
            {t("Change")}
          </Button>
        </DialogActions>
      </CustomDialog>
    </Box>
  );
};
