"use client";
import { createContext } from "react";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType>({
  user: undefined,
  branches: undefined,
  login: () => {
    console.info("LOGIN CLICKED");
  },
  logout: () => {
    console.info("LOGOUT CLICKED");
  },
  isAuthenticated: false,
  token: undefined,
  updateUser: () => {
    console.info("UPDATE USER CLICKED");
  },
});
