import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import { UserContext } from "@/shared/common/authentication";
import { ProductData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useProductsTabs = () => {
  const {
    name,
    price,
    description,
    // categories,
    // tags,
    // attribute,
    // variantValue,
  } = useContext(ProductContext);

  const { token } = useContext(UserContext);

  const { mutate, isPending: isLoadingSendingDetails } = useMutation({
    mutationFn: (productData: ProductData) => {
      return axios.post(`${SERVER_URI}/api/admin/products`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const sendProductData = () => {
    const product = {
      name,
      description,
      price: parseFloat(price),
    };
    mutate(product);
  };

  return {
    isLoadingSendingDetails,
    sendProductData,
  };
};
