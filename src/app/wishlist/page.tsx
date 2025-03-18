"use client";
import React from "react";
import { useWishlistHook } from "./wishlist.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Button } from "@mui/material";
import { TableActions } from "./components/TableActions";

const Wishlist = () => {
  const {
    wishlistData,
    tableActionButtons: actionButtons,
    handleDeleteWishlist,
  } = useWishlistHook();
  return (
    <PageWrapper actions={<TableActions buttons={actionButtons} />}>
      {wishlistData ? (
        wishlistData?.map((item) => (
          <Box key={item.id}>
            <div>Name: {item?.name}</div>
            <div>Description: {item?.description}</div>
            <div>Price: {item?.price}</div>
            <Button
              variant="outlined"
              onClick={() =>
                handleDeleteWishlist(
                  item?.pivot?.wishlist_id,
                  item?.pivot?.product_id
                )
              }
            >
              Delete wishlist
            </Button>
          </Box>
        ))
      ) : (
        <div>No wishlist yet</div>
      )}
    </PageWrapper>
  );
};

export default Wishlist;
