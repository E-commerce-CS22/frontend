/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "../../ProductContext";
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
  const { setImage } = useContext(ProductContext);

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", file);
      setImagePreview(URL.createObjectURL(file));
      if (setImage) setImage(file);
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
