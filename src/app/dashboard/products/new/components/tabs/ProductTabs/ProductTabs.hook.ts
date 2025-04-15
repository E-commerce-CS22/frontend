/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

type VariantsInput = {
  attribute_id: string;
  attribute_value_id: string;
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
    attribute,
    variantValue,
    image: productImage,
  } = useContext(ProductContext);

  const { token } = useContext(UserContext);

  const {
    data: productData,
    mutate,
    isPending: isLoadingSendingDetails,
    isSuccess: isSendingDetailsSuccess,
    isError: isSendingDetailsError,
    error: sendingDetailsError,
  } = useMutation({
    mutationFn: (productData: ProductData) => {
      return axios.post(`${SERVER_URI}/api/admin/products`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const {
    mutate: mutateCategories,
    isPending: isLoadingSendingCategories,
    isSuccess: isSendingCategoriesSuccess,
    isError: isSendingCategoriesError,
    error: sendingCategoriesError,
  } = useMutation({
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

  const {
    mutate: mutateTags,
    isPending: isLoadingSendingTags,
    isSuccess: isSendingTagsSuccess,
    isError: isSendingTagsError,
    error: sendingTagsError,
  } = useMutation({
    mutationFn: ({ id, tags }: tagsIdsType) => {
      return axios.post(`${SERVER_URI}/api/products/${id}/tags`, tags, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const {
    mutate: mutateVariant,
    isPending: isLoadingSendingVariants,
    isSuccess: isSendingVariantsSuccess,
    isError: isSendingVariantsError,
    error: sendingVariantsError,
  } = useMutation({
    mutationFn: (data: VariantsInput) => {
      return axios.post(
        `${SERVER_URI}/api/admin/variants/${variantValue?.id}/attributes`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const {
    mutate: mutateImage,
    isPending: isLoadingSendingImage,
    isSuccess: isSendingImageSuccess,
    isError: isSendingImageError,
    error: sendingImageError,
  } = useMutation({
    mutationFn: ({
      id,
      image,
    }: {
      id: string;
      image: File | undefined | null;
    }) => {
      const formData = new FormData();
      if (image) formData.append("images", image);
      return axios.post(
        `${SERVER_URI}/api/admin/products/${id}/images`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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

      const formData = new FormData();

      if (productImage) {
        formData.append("images", productImage);
      }
      mutateImage({
        id: productId,
        image: productImage,
      });

      mutateVariant({
        attribute_id: attribute?.id,
        attribute_value_id: variantValue?.id,
      });
    }
  }, [productId, productResponseStatus]);

  return {
    isLoadingSendingDetails,
    isLoadingSendingCategories,
    isLoadingSendingTags,
    isLoadingSendingImage,
    isLoadingSendingVariants,
    sendProductData,
    isSendingDetailsSuccess,
    isSendingCategoriesSuccess,
    isSendingTagsSuccess,
    isSendingVariantsSuccess,
    isSendingImageSuccess,
    isSendingDetailsError,
    isSendingCategoriesError,
    isSendingTagsError,
    isSendingVariantsError,
    isSendingImageError,
    sendingDetailsError,
    sendingCategoriesError,
    sendingTagsError,
    sendingVariantsError,
    sendingImageError,
  };
};
