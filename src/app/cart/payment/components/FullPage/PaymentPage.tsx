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
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentPage() {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const {
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

  const finalCartPrice = finalProductsPrice?.reduce((acc, item) => acc + item);
  const StyledTextarea = styled(TextareaAutosize)(({}) => ({}));

  useEffect(() => {
    if (isSuccessAddOrder) {
      router.push("/myOrders");
    }
  }, [isSuccessAddOrder]);

  return (
    <Box sx={{ bgcolor: "white", padding: "1rem 0rem 5rem" }}>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "1rem 1.5rem",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          {t("Payment")}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          p={0}
          sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}
        >
          <Grid p={"1rem"} sx={{ minWidth: "300px", maxWidth: "600px" }}>
            <TextField
              label={t("Shipping Address")}
              placeholder={t("Shipping Address")}
              fullWidth
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
            />
          </Grid>
          <Box padding={"0.8rem 1.5rem"}>
            <Typography>
              {t("Price")}: {finalCartPrice}
            </Typography>
          </Box>
          <Grid p={"1rem"} sx={{ minWidth: "300px", maxWidth: "600px" }}>
            <StyledTextarea
              id="Notes"
              aria-label="Notes"
              minRows={3}
              {...register("notes", {})}
              placeholder={t("Notes")}
              sx={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                fontFamily: "CoHeadlineTrial-Light",
                outline: "none",
                "&:focus": {
                  border: `2px solid ${primary}`,
                },
              }}
              // defaultValue={defaultValues?.notes}
            />
            {errors?.notes?.message && (
              <div style={{ color: "red" }}>{t(`${errors.notes.message}`)}</div>
            )}
          </Grid>
          <Grid p={"1rem"} sx={{ minWidth: "300px", maxWidth: "600px" }}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                {t("Choose payment way")}
              </FormLabel>
              <RadioGroup
                aria-label={t("Choose payment way")}
                name="options-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="credit_card"
                  control={<Radio color="primary" />}
                  label={t("Gawaly Wallet Payment")}
                />
                <FormControlLabel
                  value="deliveryPayment"
                  control={<Radio color="primary" />}
                  label={t("Cash on Delivery")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {selectedValue === "credit_card" && (
            <>
              <Grid p={"1rem"} sx={{ minWidth: "300px", maxWidth: "600px" }}>
                <TextField
                  fullWidth
                  label={t("Phone Number")}
                  placeholder={t("Phone Number")}
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
              <Grid p={"1rem"} sx={{ minWidth: "300px", maxWidth: "600px" }}>
                <TextField
                  fullWidth
                  label={t("Purchase Code")}
                  placeholder={t("Purchase Code")}
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
          <Button
            variant="contained"
            sx={{ margin: "0rem 1rem", minWidth: "280px", maxWidth: "580px" }}
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            {t("Confirm")}
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
