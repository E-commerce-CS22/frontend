/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserContext } from "@/shared/common/authentication";
import { SERVER_URI } from "@/shared/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

export const useProfileHook = () => {
  const { token } = useContext(UserContext);

  const router = useRouter();
  const fetchProfileData = async () => {
    const response = await axios.get(`${SERVER_URI}/api/customer/profile`, {
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
    data: profileData,
  } = useQuery({
    queryKey: ["profileData"],
    queryFn: fetchProfileData,
    enabled: !!token,
  });

  const {
    mutate: modifyProfileImage,
    isError: isErrorModifyingProfileImage,
    isSuccess: isSuccessModifyingProfileImage,
  } = useMutation({
    mutationFn: (formData: any) => {
      return axios.patch(`${SERVER_URI}/api/customer/profile/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });

  const {
    mutate: modifyPassword,
    isError: isErrorModifyingPassword,
    isSuccess: isSuccessModifyingPassword,
  } = useMutation({
    mutationFn: (password: any) => {
      return axios.patch(
        `${SERVER_URI}/api/customer/profile/password`,
        password,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleUpdateProfile = () => router.push("profile/edit");

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("profile_image", selectedFile);
    modifyProfileImage(formData);
    handleCloseDialog();
  };

  const [showPassword, setShowPassword] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    formState: { errors },
    register,
    control,
    watch,
  } = useForm({
    mode: "all",
  });

  const handleOpenPasswordDialog = () => setOpenPasswordDialog(true);
  const handleClosePasswordDialog = () => {
    setOpenPasswordDialog(false);
  };

  const password = watch("password");
  const currentPassword = watch("currentPassword");

  const handleSendNewPassword = () => {
    const newPassword = password;
    modifyPassword({
      password: newPassword,
      password_confirmation: newPassword,
      current_password: currentPassword,
    });
  };
  return {
    isLoading,
    isError,
    isSuccess,
    password,
    currentPassword,
    control,
    profileData: profileData?.data,
    isErrorModifyingProfileImage,
    isSuccessModifyingProfileImage,
    isSuccessModifyingPassword,
    isErrorModifyingPassword,
    openDialog,
    previewUrl,
    selectedFile,
    showPassword,
    openPasswordDialog,
    errors,
    register,
    handleOpenPasswordDialog,
    handleClosePasswordDialog,
    handleClickShowPassword,
    handleUpload,
    handleFileChange,
    handleCloseDialog,
    handleOpenDialog,
    handleUpdateProfile,
    handleSendNewPassword,
  };
};
