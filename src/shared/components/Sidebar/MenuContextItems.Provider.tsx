/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { FC, useState } from "react";
import { MenuItemContext } from "./context";

export const MenuContextItemsProvider: FC<any> = ({ children }) => {
  const [id, setId] = useState<string | undefined>();
  return (
    <MenuItemContext.Provider
      value={{
        id,
        setId,
      }}
    >
      {children}
    </MenuItemContext.Provider>
  );
};
