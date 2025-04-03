"use client";
import { Box } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import { CustomTable } from "@/shared/components/Table";

type ValuesModelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any;
};

export const ValuesModel = (props: ValuesModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getValuesColumns = (): any[] => [
    {
      key: "name",
      header: t("Value name"),
      accessor: "name",
    },
  ];

  const { values } = props;

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Description")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="sm"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box height={"300px"}>
        {values && (
          <Box height={"inherit"}>
            <CustomTable
              columns={getValuesColumns()}
              data={values}
              pageIndex={1}
              pageSize={100}
              hasNextPage={false}
              hasPreviousPage={false}
              hasFooter={false}
            />
          </Box>
        )}
      </Box>
    </CustomDialog>
  );
};
