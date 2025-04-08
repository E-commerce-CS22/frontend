/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

export const useAddDiscountHook = () => {
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = methods;

  const handleClick = () => {};

  return {
    handleSubmit,
    errors,
    register,
    methods,
    control,
    handleClick,
  };
};
