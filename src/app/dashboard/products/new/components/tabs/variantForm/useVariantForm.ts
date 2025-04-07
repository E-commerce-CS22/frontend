/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../ProductContext";
export const useVariantsForm = () => {
  const { token } = useContext(UserContext);
  const [selectedAttribute, setSelectedAttribute] = useState<any>(null);
  const { setAttribute, setVariantValue } = useContext(ProductContext);

  const fetchProductAttributes = async () => {
    const response = await axios.get(`${SERVER_URI}/api/admin/attributes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    isPending: isLoading,
    isError,
    isSuccess,
    data: productAttributesData,
  } = useQuery({
    queryKey: ["adminProductsAttributes"],
    queryFn: fetchProductAttributes,
    enabled: !!token,
  });
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const fetchAttributeVariantValues = async () => {
    const response = await axios.get(
      `${SERVER_URI}/api/admin/attributes/${selectedAttribute.id}/values`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const {
    isPending: isLoadingFetchingAttributeVariantValue,
    isError: isErrorFetchingAttributeVariantValue,
    isSuccess: isSuccessFetchingAttributeVariantValue,
    data: attributeValues,
  } = useQuery({
    queryKey: ["adminProductsAttributeVariantValues"],
    queryFn: fetchAttributeVariantValues,
    enabled: !!token,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = methods;

  const handleCancel = () => {};
  const handleClick = () => {};

  const handleChangeAttribute = (newValue, field) => {
    field.onChange(newValue);
    setSelectedAttribute(newValue);
    if (setAttribute) setAttribute(newValue);
  };

  const handleChangeVariantValue = (newValue, field) => {
    field.onChange(newValue);
    if (setVariantValue) setVariantValue(newValue);
  };
  return {
    isLoading,
    attributes: productAttributesData?.data,
    methods,
    register,
    errors,
    isError,
    isSuccess,
    control,
    selectedAttribute,
    attributeValues: attributeValues?.data,
    isLoadingFetchingAttributeVariantValue,
    isSuccessFetchingAttributeVariantValue,
    isErrorFetchingAttributeVariantValue,
    handleCancel,
    handleClick,
    handleSubmit,
    handleChangeAttribute,
    handleChangeVariantValue,
  };
};
