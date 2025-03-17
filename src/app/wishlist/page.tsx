"use client";
import React from "react";
import { useWishlistHook } from "./wishlist.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box } from "@mui/material";
import { TableActions } from "./components/TableActions";

const Wishlist = () => {
  const { wishlistData, tableActionButtons: actionButtons } = useWishlistHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      {wishlistData ? (
        wishlistData?.map((item) => (
          <Box key={item.id}>
            <div>Name: {item?.name}</div>
            <div>Description: {item?.description}</div>
            <div>Price: {item?.price}</div>
          </Box>
        ))
      ) : (
        <div>No wishlist yet</div>
      )}
    </PageWrapper>
  );
};

export default Wishlist;
