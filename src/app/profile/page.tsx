"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useProfileHook } from "./Profile.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { CloseIcon, EyeOffIcon, Show } from "@/shared/components/icons";
// import { register } from "module";
// import { patternPassword } from "@/shared/utils";
import { Controller } from "react-hook-form";

export default function Profile() {
  const {
    isLoading,
    isSuccess,
    isError,
    profileData,
    openDialog,
    previewUrl,
    selectedFile,
    errors,
    control,
    password,
    currentPassword,
    isErrorModifyingProfileImage,
    isSuccessModifyingProfileImage,
    showPassword,
    openPasswordDialog,
    handleClickShowPassword,
    handleClosePasswordDialog,
    handleOpenPasswordDialog,
    handleUpload,
    handleFileChange,
    handleCloseDialog,
    handleOpenDialog,
    handleUpdateProfile,
    handleSendNewPassword,
  } = useProfileHook();
  const { t } = useTranslation("Store");

  useEffect(() => {
    if (isLoading)
      toast.loading(t("Loading profile..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isSuccess) toast.success(t("Profile loaded successfully!"));
    if (isError) toast.error(t("Failed to load profile"));
  }, [isLoading, isSuccess, isError]);

  useEffect(() => {
    if (isSuccess) toast.success(t("Profile image posted successfully!"));
    if (isErrorModifyingProfileImage)
      toast.error(t("Failed to post profile image"));
  }, [isErrorModifyingProfileImage, isSuccessModifyingProfileImage]);

  if (isLoading || !profileData) {
    return (
      <PageWrapper>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="70vh"
        >
          <CircularProgress />
        </Box>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Box display="flex" justifyContent="center" alignItems="center" px={2}>
        <Card
          sx={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "16px",
            boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
            p: 3,
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar
              src={
                profileData.profile
                  ? `http://127.0.0.1:8000/storage/${profileData.profile}`
                  : "/smartStore1.png"
              }
              alt="Profile"
              sx={{ width: 120, height: 120, mb: 1 }}
            />
            <Typography variant="h5" fontWeight="bold">
              {profileData.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profileData.email}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <CardContent>
            <Grid container spacing={2}>
              {renderProfileItem(
                t("First name"),
                profileData.customer_data?.first_name
              )}
              {renderProfileItem(
                t("Last name"),
                profileData.customer_data?.last_name
              )}
              {renderProfileItem(
                t("Phone number"),
                profileData.customer_data?.phone
              )}
              {profileData.customer_data?.postal_code &&
                renderProfileItem(
                  t("Postal Code"),
                  profileData.customer_data?.postal_code
                )}
              {renderProfileItem(t("City"), profileData.customer_data?.city)}
              {renderProfileItem(
                t("Country"),
                profileData.customer_data?.country
              )}
              {renderProfileItem(
                t("Address"),
                profileData.customer_data?.address
              )}
            </Grid>
          </CardContent>

          <Box
            mt={4}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={2}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleUpdateProfile}
              sx={{
                px: 4,
                borderRadius: "12px",
                boxShadow: 3,
                textTransform: "none",
                minWidth: "200px",
              }}
            >
              {t("Modify")}
            </Button>

            <Button
              variant="outlined"
              color="success"
              size="large"
              onClick={handleOpenDialog}
              sx={{
                px: 4,
                borderRadius: "12px",
                boxShadow: 1,
                textTransform: "none",
                minWidth: "200px",
              }}
            >
              {!profileData.profile
                ? t("Add profile image")
                : t("Modify profile image")}
            </Button>

            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={handleOpenPasswordDialog}
              sx={{
                px: 4,
                borderRadius: "12px",
                boxShadow: 3,
                textTransform: "none",
                minWidth: "200px",
                color: "white",
              }}
            >
              {t("Change password")}
            </Button>
          </Box>
        </Card>
      </Box>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          {t("Update Profile Image")}
          <IconButton onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
          >
            {previewUrl ? (
              <Avatar src={previewUrl} sx={{ width: 100, height: 100 }} />
            ) : (
              <Avatar
                src={profileData?.profile || "/smartStore1.png"}
                sx={{ width: 100, height: 100 }}
              />
            )}

            <Button component="label" variant="outlined">
              {t("Choose Image")}
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
            <Typography variant="caption" color="text.secondary">
              {t("Only PNG or JPEG formats.")}
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>{t("Cancel")}</Button>
          <Button
            onClick={handleUpload}
            variant="contained"
            color="primary"
            disabled={!selectedFile}
          >
            {t("Upload")}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openPasswordDialog}
        onClose={handleClosePasswordDialog}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            p: 2,
            boxShadow: 6,
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontWeight: 600,
            fontSize: "1.25rem",
          }}
        >
          {t("Update password")}
          <IconButton onClick={handleClosePasswordDialog} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box mt={1.5}>
            <Controller
              name="password"
              control={control}
              // rules={{
              //   required: t("Password is required"),
              //   pattern: patternPassword,
              // }}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={password}
                  fullWidth
                  label={t("Password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Password")}
                  error={Boolean(errors?.password)}
                  helperText={
                    errors?.password?.message
                      ? t(String(errors.password.message))
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ padding: 0 }}
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Show /> : <EyeOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                    },
                  }}
                />
              )}
            />
          </Box>
          <Box mt={1.5}>
            <Controller
              name="currentPassword"
              control={control}
              // rules={{
              //   required: t("Password is required"),
              //   pattern: patternPassword,
              // }}
              render={({ field }) => (
                <TextField
                  {...field}
                  value={currentPassword}
                  fullWidth
                  label={t("Current Password")}
                  type={showPassword ? "text" : "password"}
                  placeholder={t("Current Password")}
                  error={Boolean(errors?.currentPassword)}
                  helperText={
                    errors?.currentPassword?.message
                      ? t(String(errors.currentPassword.message))
                      : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          sx={{ padding: 0 }}
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Show /> : <EyeOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "12px",
                    },
                  }}
                />
              )}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-between", p: 2 }}>
          <Button
            onClick={handleClosePasswordDialog}
            color="secondary"
            variant="text"
          >
            {t("Cancel")}
          </Button>
          <Button
            onClick={handleSendNewPassword}
            type="submit"
            variant="contained"
            color="primary"
          >
            {t("Save")}
          </Button>
        </DialogActions>
      </Dialog>
    </PageWrapper>
  );
}

function renderProfileItem(label: string, value?: string) {
  return (
    <Grid item xs={12} sm={6}>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          padding: "1rem",
          minHeight: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transition: "0.3s ease",
          "&:hover": {
            backgroundColor: "#f1f1f1",
          },
        }}
      >
        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
          sx={{ fontSize: "0.85rem", textTransform: "uppercase" }}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{ fontSize: "1rem", color: "#333" }}
        >
          {value || "—"}
        </Typography>
      </Box>
    </Grid>
  );
}
