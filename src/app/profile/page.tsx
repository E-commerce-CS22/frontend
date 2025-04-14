"use client";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useProfileHook } from "./Profile.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Profile() {
  const { isLoading, isSuccess, isError, profileData } = useProfileHook();
  const { t } = useTranslation("Store");
  const router = useRouter();

  useEffect(() => {
    if (isLoading)
      toast.loading(t("Loading profile..."), { toastId: "loadProfile" });
    else toast.dismiss("loadProfile");

    if (isSuccess) toast.success(t("Profile loaded successfully!"));
    if (isError) toast.error(t("Failed to load profile"));
  }, [isLoading, isSuccess, isError, t]);

  const handleUpdateProfile = () => {
    router.push("profile/edit");
  };

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

  console.log(profileData);

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
              src={profileData.profile_image || "/smartStore1.png"}
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

          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={handleUpdateProfile}
              sx={{ px: 4, borderRadius: "12px" }}
            >
              {t("Modify")}
            </Button>
          </Box>
        </Card>
      </Box>
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
