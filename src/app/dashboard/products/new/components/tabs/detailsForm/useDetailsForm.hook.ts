/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
export const useDetailsForm = () => {
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;

  const isLoading = false;
  const handleCancel = () => {};
  const handleClick = () => {};
  return {
    isLoading,
    handleCancel,
    handleClick,
    handleSubmit,
    methods,
    register,
    errors,
  };
};
