"use client";
import { Box, Button, Typography } from "@mui/material";
import { useProfileHook } from "./Profile.hook";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import Image from "next/image";
import { darkGrey, primary } from "@/shared/customization";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Profile() {
  const {
    // isLoading,
    // isSuccess,
    // isError,
    profileData,
  } = useProfileHook();
  const { t } = useTranslation("Store");
  const router = useRouter();
  const handleUpdateProfile = () => {
    router.push("profile/edit");
  };
  return (
    <PageWrapper>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          maxWidth={"600px"}
          border={`1px solid ${primary}`}
          p={"1rem 2rem"}
          borderRadius={"4px"}
          textAlign={"center"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography mb={"0.8rem"}>{t("My profile data")}</Typography>
          <Box
            bgcolor={darkGrey}
            borderRadius="50%"
            width={"170px"}
            height={"170px"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={profileData?.profile_image || "/smartStore1.png"}
              width={"150"}
              height={"150"}
              alt="My image"
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography py={"0.8rem"}>
            {t("Username")}: {profileData?.username}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("First name")}: {profileData?.first_name}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Last name")}: {profileData?.last_name}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Email")}: {profileData?.email}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Phone number")}: {profileData?.phone}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Postal Code")}: {profileData?.postal_code}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("City")}: {profileData?.city}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Country")}: {profileData?.country}
          </Typography>
          <Typography py={"0.8rem"}>
            {t("Address")}: {profileData?.address}
          </Typography>
          <Button onClick={handleUpdateProfile} variant="contained">
            {t("Modify")}
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
}
