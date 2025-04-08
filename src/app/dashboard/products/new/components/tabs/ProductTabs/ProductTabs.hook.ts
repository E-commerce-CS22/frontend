import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import { UserContext } from "@/shared/common/authentication";
import { ProductData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type categoriesIdsType = {
  category_ids: string[];
};

type tagsIdsType = {
  tag_ids: string[];
};

export const useProductsTabs = () => {
  const {
    name,
    price,
    description,
    categories,
    tags,
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

  const { mutate: mutateCategories, isPending: isLoadingSendingCategories } =
    useMutation({
      mutationFn: (categories: categoriesIdsType) => {
        return axios.post(
          `${SERVER_URI}/api/products/5/categories`,
          categories,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      },
    });

  const { mutate: mutateTags, isPending: isLoadingSendingTags } = useMutation({
    mutationFn: (tags: tagsIdsType) => {
      return axios.post(`${SERVER_URI}/api/products/1/tags`, tags, {
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

    const categoriesIds = categories?.map((item) => item?.id);
    mutateCategories({ category_ids: categoriesIds });

    const tagsIds = tags?.map((item) => item?.id);
    mutateTags({ tag_ids: tagsIds });
  };

  return {
    isLoadingSendingDetails,
    isLoadingSendingCategories,
    isLoadingSendingTags,
    sendProductData,
  };
};
