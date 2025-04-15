/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { usePaymentPageHook } from "./usePaymentPage.hook";
import Grid from "@mui/material/Grid";
import { primary } from "@/shared/customization";
import { getRequiredValidation, patternMobile } from "@/shared/utils";
import {
  TextField,
  Typography,
  styled,
  TextareaAutosize,
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Paper,
  Divider,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { toast } from "react-toastify";

export default function PaymentPage() {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const {
    // isLoading,
    // isError,
    // isSuccess,
    products,
    defaultAddress,
    isSuccessAddOrder,
    onSubmit,
    selectedValue,
    handleChange,
  } = usePaymentPageHook();
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = methods;
  const finalProductsPrice = products?.map(
    (item) => item?.price * item?.pivot.quantity
  );

  const finalCartPrice = finalProductsPrice?.reduce(
    (acc, item) => acc + item,
    0
  );

  const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
    width: "100%",
    padding: theme.spacing(1.5),
    borderRadius: theme.shape.borderRadius,
    fontFamily: "CoHeadlineTrial-Light, Arial, sans-serif",
    border: `1px solid ${theme.palette.grey[300]}`,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderColor: primary,
      boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
      outline: "none",
    },
    "&:hover": {
      borderColor: theme.palette.grey[400],
    },
  }));

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        minHeight: "100vh",
        py: 4,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          maxWidth: 800,
          mx: "auto",
          p: 3,
          borderRadius: 2,
          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          gutterBottom
          sx={{ color: "text.primary", mb: 3 }}
        >
          {t("Payment Details")}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label={t("Shipping Address")}
                placeholder={t("Enter your shipping address")}
                fullWidth
                variant="outlined"
                error={Boolean(errors?.shippingAddress?.message)}
                helperText={
                  errors?.shippingAddress?.message
                    ? t(`${errors.shippingAddress.message}`)
                    : ""
                }
                {...register(`shippingAddress`, {
                  required: getRequiredValidation(t, true),
                })}
                defaultValue={defaultAddress}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "grey.300",
                    },
                    "&:hover fieldset": {
                      borderColor: "grey.400",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: primary,
                    },
                  },
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: "grey.50",
                  borderRadius: 1,
                }}
              >
                <Typography variant="subtitle1" fontWeight={500} gutterBottom>
                  {t("Order Summary")}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body1" color="text.secondary">
                    {t("Total Amount")}:
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    {finalCartPrice?.toFixed(2)} {t("Riyal")}
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel
                  sx={{ mb: 1, color: "text.primary", fontWeight: 500 }}
                >
                  {t("Additional Notes")}
                </FormLabel>
                <StyledTextarea
                  id="Notes"
                  aria-label="Notes"
                  minRows={4}
                  {...register("notes", {})}
                  placeholder={t("Any special instructions for your order...")}
                />
                {errors?.notes?.message && (
                  <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                    {t(`${errors.notes.message}`)}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel
                  component="legend"
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    mb: 1,
                  }}
                >
                  {t("Payment Method")}
                </FormLabel>
                <RadioGroup
                  aria-label={t("Choose payment way")}
                  name="payment-method"
                  value={selectedValue}
                  onChange={handleChange}
                  sx={{ gap: 1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      border: `1px solid ${
                        selectedValue === "credit_card" ? primary : "grey.200"
                      }`,
                      borderRadius: 1,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor:
                          selectedValue === "credit_card"
                            ? primary
                            : "grey.300",
                      },
                    }}
                  >
                    <FormControlLabel
                      value="credit_card"
                      control={<Radio color="primary" />}
                      label={
                        <Box>
                          <Typography fontWeight={500}>
                            {t("Gawaly Wallet Payment")}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {t("Pay instantly with your Gawaly Wallet")}
                          </Typography>
                        </Box>
                      }
                      sx={{ alignItems: "flex-start" }}
                    />
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      border: `1px solid ${
                        selectedValue === "deliveryPayment"
                          ? primary
                          : "grey.200"
                      }`,
                      borderRadius: 1,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor:
                          selectedValue === "deliveryPayment"
                            ? primary
                            : "grey.300",
                      },
                    }}
                  >
                    <FormControlLabel
                      value="cash_on_delivery"
                      control={<Radio color="primary" />}
                      label={
                        <Box>
                          <Typography fontWeight={500}>
                            {t("Cash on Delivery")}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {t("Pay when you receive your order")}
                          </Typography>
                        </Box>
                      }
                      sx={{ alignItems: "flex-start" }}
                    />
                  </Paper>
                </RadioGroup>
              </FormControl>
            </Grid>

            {selectedValue === "credit_card" && (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={t("Phone Number")}
                    placeholder={t("+967781111111")}
                    error={Boolean(errors?.phoneNumber)}
                    helperText={
                      errors?.phoneNumber?.message
                        ? t(String(errors.phoneNumber.message))
                        : ""
                    }
                    inputProps={{ maxLength: 13, dir: "ltr" }}
                    {...register("phoneNumber", {
                      required: t("Phone number is required"),
                      pattern: patternMobile,
                    })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label={t("Purchase Code")}
                    placeholder={t("Enter your purchase code")}
                    error={Boolean(errors?.purchaseCode)}
                    helperText={
                      errors?.purchaseCode?.message
                        ? t(String(errors.purchaseCode.message))
                        : ""
                    }
                    {...register("purchaseCode", {
                      required: t("Purchase code is required"),
                    })}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                size="large"
                type="submit"
                sx={{
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: "1rem",
                  textTransform: "none",
                  boxShadow: "none",
                }}
              >
                {t("Confirm Order")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Dialog
        open={isSuccessAddOrder}
        onClose={() => {}}
        fullWidth
        maxWidth="xs"
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 3,
            textAlign: "center",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "success.main",
            pb: 1,
          }}
        >
          ✅ {t("Success")}
        </DialogTitle>

        <DialogContent>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {t("Your order has been placed successfully.")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/")}
            sx={{
              mt: 1,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "none",
            }}
          >
            {t("Go to Home")}
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
