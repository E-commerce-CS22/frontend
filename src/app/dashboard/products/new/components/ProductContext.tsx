/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext, useState } from "react";

interface ProductContextValue {
  name?: any;
  description?: any;
  price?: any;
  categories?: any;
  setName?: React.Dispatch<React.SetStateAction<any>>;
  setDescription?: React.Dispatch<React.SetStateAction<any>>;
  setPrice?: React.Dispatch<React.SetStateAction<any>>;
  setCategories?: React.Dispatch<React.SetStateAction<any>>;
}
export const ProductContext = React.createContext<ProductContextValue>(
  {} as ProductContextValue
);

type ProductContextValueProps = {
  children: React.ReactNode;
};
export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductContextProvider: FC<ProductContextValueProps> = ({
  children,
}) => {
  const [name, setName] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const [categories, setCategories] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        name,
        description,
        price,
        categories,
        setDescription,
        setPrice,
        setName,
        setCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
