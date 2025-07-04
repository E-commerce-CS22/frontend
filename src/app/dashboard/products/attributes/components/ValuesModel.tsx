"use client";
import { Box } from "@mui/material";
import { CustomDialog } from "@/shared/components/CustomDialog";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { ShowButton } from "@/shared/components/ShowButton";
import { CustomTable } from "@/shared/components/Table";
import { DeleteValueModel } from "./DeleteValueModel";
import { UpdateValueModel } from "./UpdateValueModel";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";

type ValuesModelProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  values: any;
  id: string;
};

export const ValuesModel = (props: ValuesModelProps) => {
  const { t } = useTranslation("Store");
  const [open, setOpen] = useState(false);

  const { id: attributeId, values } = props;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getValuesColumns = (): any[] => [
    {
      key: "name",
      header: t("Value name"),
      accessor: "name",
    },
    {
      key: "Modify",
      header: t("Modify name"),
      accessor: ({ id }) => (
        <UpdateValueModel id={id} attributeId={attributeId} />
      ),
    },
    {
      key: "delete",
      header: t("Delete"),
      accessor: ({ id }) => (
        <DeleteValueModel id={id} attributeId={attributeId} />
      ),
    },
  ];

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <CustomDialog
      title={t("Description")}
      open={open}
      onCloseModal={handleClickOpen}
      maxWidth="md"
      button={<ShowButton onClick={handleClickOpen} />}
    >
      <Box height={"300px"}>
        {values && (
          <PageWrapper padding={"0px"}>
            <CustomTable
              columns={getValuesColumns()}
              data={values}
              pageIndex={1}
              pageSize={100}
              hasNextPage={false}
              hasPreviousPage={false}
              hasFooter={false}
            />
          </PageWrapper>
        )}
      </Box>
    </CustomDialog>
  );
};
