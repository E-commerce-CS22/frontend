"use client";
import { useMyOrdersHook } from "./myOrders.hook";
import { CustomTable } from "@/shared/components/Table";
import { Box } from "@mui/material";

export const MyOrdersPage = () => {
  const { myOrdersData, columns } = useMyOrdersHook();

  console.log(myOrdersData);
  return (
    <Box padding={"3rem 2rem"}>
      <CustomTable
        columns={columns}
        data={myOrdersData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </Box>
  );
};
