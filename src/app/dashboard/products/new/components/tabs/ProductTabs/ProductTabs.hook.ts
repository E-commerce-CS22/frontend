import { useContext, useEffect } from "react";
import { ProductContext } from "../../ProductContext";
import { UserContext } from "@/shared/common/authentication";
import { ProductData } from "@/shared/types";
import { SERVER_URI } from "@/shared/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type categoriesIdsType = {
  id: string;
  categories: {
    category_ids: string[];
  };
};

type tagsIdsType = {
  id: string;
  tags: {
    tag_ids: string[];
  };
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

  const {
    data: productData,
    mutate,
    isPending: isLoadingSendingDetails,
  } = useMutation({
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
      mutationFn: ({ id, categories }: categoriesIdsType) => {
        return axios.post(
          `${SERVER_URI}/api/products/${id}/categories`,
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
    mutationFn: ({ id, tags }: tagsIdsType) => {
      return axios.post(`${SERVER_URI}/api/products/${id}/tags`, tags, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const productResponseStatus = productData?.status;
  const productId = productData?.data?.product?.id;

  const sendProductData = () => {
    const product = {
      name,
      description,
      price: parseFloat(price),
    };
    mutate(product);
  };

  console.log(productData);

  useEffect(() => {
    if (productId && productResponseStatus === 201) {
      const categoriesIds = categories?.map((item) => item?.id);
      mutateCategories({
        id: productId,
        categories: { category_ids: categoriesIds },
      });

      const tagsIds = tags?.map((item) => item?.id);
      mutateTags({
        id: productId,
        tags: { tag_ids: tagsIds },
      });
    }
  }, [productId, productResponseStatus]);

  return {
    isLoadingSendingDetails,
    isLoadingSendingCategories,
    isLoadingSendingTags,
    sendProductData,
  };
};
