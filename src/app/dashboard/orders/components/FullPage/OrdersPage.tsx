"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { CustomTable } from "@/shared/components/Table";
import { useOderPageHook } from "./useOrderPage.hook";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export const OrdersPage = () => {
  const { ordersData, columns } = useOderPageHook();
  console.log(ordersData);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <PageWrapper
      actions={<Box sx={{ height: "3rem", bgcolor: "white" }}></Box>}
    >
      <CustomTable
        columns={columns}
        data={ordersData}
        pageIndex={1}
        pageSize={100}
        hasNextPage={false}
        hasPreviousPage={false}
        hasFooter={false}
      />
    </PageWrapper>
  );
};
