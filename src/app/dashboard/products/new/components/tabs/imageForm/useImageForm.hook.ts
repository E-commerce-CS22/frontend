/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
export const useImageForm = () => {
  const methods = useForm<any>({
    mode: "all",
    criteriaMode: "all",
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = methods;

  const isLoading = false;
  const handleCancel = () => {};
  const handleClick = () => {};

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return {
    isLoading,
    handleCancel,
    handleClick,
    handleSubmit,
    methods,
    register,
    errors,
    imagePreview,
    handleImageUpload,
  };
};
