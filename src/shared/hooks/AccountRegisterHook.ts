/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useTranslation } from "react-i18next";
import { useState } from "react";
// import { dialogStep } from "../utils";

export const useAccountRegisterHook = () => {
  // const { t } = useTranslation("Store");

  const [errors, setErrors] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data) => {
    // if (data?.confirmPassword !== data?.password) {
    //   setErrors([
    //     {
    //       field: "confirmPassword",
    //       message: t("Passwords doesn't match"),
    //     },
    //     {
    //       field: "password",
    //       message: t("Passwords doesn't match"),
    //     },
    //   ]);
    //   return;
    // }
    // setErrors([]);
    // setMobile(data.mobile);
    // signUp({
    //   variables: {
    //     input: {
    //       nationalId: data?.nationalId,
    //       password: data?.password,
    //       firstName: data.firstName,
    //       mobile: data.mobile,
    //       lastName: data.lastName,
    //     },
    //   },
    // });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return {
    errors,
    setErrors, // remove this
    showPassword,
    showConfirmPassword,
    onSubmit,
    handleClickShowPassword,
    handleClickShowConfirmPassword,
  };
};
