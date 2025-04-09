"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useMyOrdersHook } from "./myOrders.hook";

export const MyOrdersPage = () => {
  const { myOrdersData } = useMyOrdersHook();

  console.log(myOrdersData);
  return (
    <PageWrapper>
      <div>My Orders</div>
    </PageWrapper>
  );
};
