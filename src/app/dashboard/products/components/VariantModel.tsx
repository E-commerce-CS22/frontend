"use client";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  styled,
} from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { Add } from "@mui/icons-material";
import { darkGrey } from "@/shared/customization";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { SERVER_URI } from "@/shared/utils";
import { UserContext } from "@/shared/common/authentication";

const StyledDialogContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  minWidth: 500,
  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
}));

const AddButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
  fontWeight: 600,
}));

const ValueTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
  },
}));

type VariantsModelProps = {
  id: string;
  variants: {
    id: string;
    color?: string;
    memory?: string;
    raw?: string;
    image: string;
    price?: string;
    sku?: string;
    stock?: string;
    variant_title?: string;
  }[];
};

export const VariantsModel = (props: VariantsModelProps) => {
  const theme = useTheme();
  const { token } = useContext(UserContext);
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);
  const [openValue, setOpenValue] = useState(false);
  const [value, setValue] = useState("");
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async ({
      id,
      bodyData,
    }: {
      id: string;
      bodyData: { name: string };
    }) => {
      try {
        const response = await axios.post(
          `${SERVER_URI}/api/admin/attributes/${id}/values`,
          bodyData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("Failed to add variant value:", error);
        throw error;
      }
    },
    onSuccess: () => {
      setValue("");
      setOpenValue(false);
    },
  });

  const handleClickOpenValue = (id: string) => {
    setOpenValue(!openValue);
    setSelectedId(id);
  };

  const handleSendData = () => {
    if (selectedId && value.trim()) {
      mutate({ id: selectedId, bodyData: { name: value } });
    }
  };

  const { variants } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const getVariantsColumns = () => [
    {
      key: "price",
      header: t("Price"),
      accessor: "price",
      cellStyle: { fontWeight: 600 },
    },
    {
      key: "sku",
      header: t("Sku"),
      accessor: "sku",
      cellStyle: { fontFamily: "monospace" },
    },
    {
      key: "stock",
      header: t("Stock"),
      accessor: "stock",
      cellStyle: (value: string) => ({
        color:
          parseInt(value) > 0
            ? theme.palette.success.main
            : theme.palette.error.main,
        fontWeight: 600,
      }),
    },
    {
      key: "variant_title",
      header: t("Variant Title"),
      accessor: "variant_title",
      cellStyle: { textTransform: "capitalize" },
    },
    {
      key: "AddVariant",
      header: t("Add Value"),
      accessor: ({ id }: { id: string }) => (
        <Box display="flex" justifyContent="center">
          <CustomDialog
            title={t("Add New Variant Value")}
            open={openValue}
            onCloseModal={() => handleClickOpenValue(id)}
            maxWidth="sm"
            button={
              <Add
                sx={{
                  cursor: "pointer",
                  color: darkGrey,
                  "&:hover": {
                    color: theme.palette.primary.main,
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                onClick={() => handleClickOpenValue(id)}
              />
            }
          >
            <StyledDialogContent>
              <ValueTextField
                fullWidth
                label={t("Value")}
                placeholder={t("Enter variant value")}
                value={value}
                onChange={handleChangeValue}
                variant="outlined"
                autoFocus
              />
              <AddButton
                onClick={handleSendData}
                variant="contained"
                color="primary"
                disabled={!value.trim() || isPending}
                fullWidth
              >
                {isPending ? t("Adding...") : t("Add Value")}
              </AddButton>
            </StyledDialogContent>
          </CustomDialog>
        </Box>
      ),
    },
  ];

  return (
    <CustomDialog
      title={t("Product Variants")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="lg"
      button={
        <ShowButton
          onClick={handleClickOpen}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
      }
    >
      <StyledDialogContent>
        {variants?.length ? (
          <PageWrapper padding={"0"}>
            <CustomTable
              columns={getVariantsColumns()}
              data={variants}
              pageIndex={1}
              pageSize={100}
              hasNextPage={false}
              hasPreviousPage={false}
              hasFooter={false}
            />
          </PageWrapper>
        ) : (
          <Typography
            variant="body1"
            textAlign="center"
            color="textSecondary"
            sx={{ py: 4 }}
          >
            {t("No variants available yet")}
          </Typography>
        )}
      </StyledDialogContent>
    </CustomDialog>
  );
};
