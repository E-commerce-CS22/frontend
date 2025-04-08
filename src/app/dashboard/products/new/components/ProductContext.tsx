/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useContext, useState } from "react";

interface ProductContextValue {
  name?: any;
  description?: any;
  price?: any;
  categories?: any;
  tags?: any;
  attribute?: any;
  variantValue?: any;
  image?: File | null | undefined;
  setName?: React.Dispatch<React.SetStateAction<any>>;
  setDescription?: React.Dispatch<React.SetStateAction<any>>;
  setPrice?: React.Dispatch<React.SetStateAction<any>>;
  setCategories?: React.Dispatch<React.SetStateAction<any>>;
  setTags?: React.Dispatch<React.SetStateAction<any>>;
  setAttribute?: React.Dispatch<React.SetStateAction<any>>;
  setVariantValue?: React.Dispatch<React.SetStateAction<any>>;
  setImage?: React.Dispatch<React.SetStateAction<File | null | undefined>>;
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
  const [tags, setTags] = useState([]);
  const [attribute, setAttribute] = useState("");
  const [variantValue, setVariantValue] = useState("");
  const [image, setImage] = useState<File | null | undefined>(null);

  return (
    <ProductContext.Provider
      value={{
        name,
        description,
        price,
        categories,
        tags,
        attribute,
        variantValue,
        image,
        setDescription,
        setPrice,
        setName,
        setCategories,
        setTags,
        setAttribute,
        setVariantValue,
        setImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
