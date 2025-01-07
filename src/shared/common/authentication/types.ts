/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface UserContextType {
  user: any | null | undefined;
  login: (token: string, user: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
  token: string | undefined;
  updateUser: (user: any) => void;
}

export interface IUserContextProvider {
  children: React.ReactNode;
}
