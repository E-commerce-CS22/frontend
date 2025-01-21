import { useSignUp } from "@/shared/api/auth";
import { useState } from "react";
export const useSignUpHook = () => {
  const { mutate: signUp, isError, error } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const handleSignUp = async () => {
    const userData = {
      first_name: "John",
      last_name: "Doe",
      email: "hazim11@gmail.com",
      username: "hazim221",
      phone: "96650012345654",
      password: "password123",
      password_confirmation: "password123",
      address: "123 Main St",
      city: "Riyadh",
      postal_code: "12345",
      profile: "https://www.example.com/aprofile.png",
    };

    try {
      const result = await signUp(userData);
      console.log("Sign-up successful:", result);
    } catch (err) {
      console.error("Error during sign-up:", err);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setshowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = () => {};
  return {
    showPassword,
    showConfirmPassword,
    onSubmit,
    handleClickShowConfirmPassword,
    handleClickShowPassword,
    handleSignUp,
    isError,
    error,
  };
};
