/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useTranslation } from "react-i18next";
import { useState } from "react";
// import { dialogStep } from "../utils";

export const useAccountLoginHook = () => {
  // const { t } = useTranslation("Store");

  const [errors, setErrors] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // const [signUp] = useSignupMutation({
  //   onCompleted: (data) => {
  //     const errors = data?.accountRegister?.accountErrors;

  //     if (errors?.length === 0) {
  //       // some code here
  //       onChangeStep(dialogStep.verify);
  //     } else {
  //       setErrors(errors);
  //     }
  //   },
  // });

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

  return {
    errors,
    setErrors, // remove this
    showPassword,
    onSubmit,
    handleClickShowPassword,
  };
};
