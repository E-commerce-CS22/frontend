/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/shared/common/authentication";

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useContext(UserContext);
  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const getUserData = async (url: string, userCredentials: any) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
      const userData = await response.json();
      return userData;
    } catch (error: any) {
      return error.message;
    }
  };

  const handleLogin = async (userCredentials: any) => {
    console.log("User Credentials: ", userCredentials);
    try {
      const userData = await getUserData(
        process.env.NEXT_PUBLIC_CUSTOMER_LOGIN_URI || "",
        userCredentials
      );
      const { token, user } = userData;
      login(token, user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return { isLoggedIn, handleLogin };
};
