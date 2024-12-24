/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface UserContextType {
  user: any | null | undefined;
  branches: any | null | undefined;
  login: (token: string, user: any, branches: any) => void;
  logout: () => void;
  isAuthenticated: boolean;
  token: string | undefined;
  updateUser: (user: any) => void;
}

export interface IUserContextProvider {
  children: React.ReactNode;
  apolloClient; // ApolloClient
}
