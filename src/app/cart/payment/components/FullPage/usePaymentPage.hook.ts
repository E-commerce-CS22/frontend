/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";

export const usePaymentPageHook = () => {
  const { token, user } = useContext(UserContext);
  const {
    customer_data: { address },
  } = user;
  const fetchProducts = async () => {
    const response = await axios.get(`${SERVER_URI}/api/carts/products`, {
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
    data: products,
  } = useQuery({
    queryKey: ["customerCartProducts"],
    queryFn: fetchProducts,
    enabled: !!token,
  });

  const {
    mutate,
    isError: isErrorAddOrder,
    isSuccess: isSuccessAddOrder,
  } = useMutation({
    mutationFn: (data: any) => {
      return axios.post(`${SERVER_URI}/api/customer/orders`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(products);
    const orderProducts = products?.map((item) => {
      return {
        product_id: item?.id,
        quantity: item?.pivot?.quantity,
        product_variant_id: item?.pivot?.quantity,
      };
    });
    const order = {
      items: orderProducts,
      shipping_address: data?.shippingAddress,
      payment_method: selectedValue,
      shipping_method: "standard",
      notes: data?.notes || "",
    };
    mutate(order);
  };

  const [selectedValue, setSelectedValue] = useState<string>("option1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return {
    selectedValue,
    isLoading,
    isError,
    isSuccess,
    isErrorAddOrder,
    isSuccessAddOrder,
    products: products,
    defaultAddress: address,
    onSubmit,
    handleChange,
  };
};
