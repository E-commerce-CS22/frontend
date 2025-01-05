/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { UserContext } from "./context";
import { IUserContextProvider, UserContextType } from "./types";
import {
  checkIsTokenSaved,
  getToken,
  getUser,
  removeToken,
  removeUser,
  setToken,
  setUser,
} from "./utils";

export const UserContextProvider = (props: IUserContextProvider) => {
  const handleLogin = (token: string, user: any) => {
    setToken(token);
    setUser(user);
    setState({ ...state, user, isAuthenticated: true });
  };
  const handleLogout = () => {
    removeToken();
    removeUser();
    // backend logout logic
    setState({
      ...state,
      user: undefined,
      isAuthenticated: false,
    });
    setTimeout(() => {
      window?.["sseControllerRef"]?.abort();
    }, 250);
  };

  const updateUser = (newUser) => {
    if (newUser) {
      const user = getUser();
      const updatedUser = { ...user, ...state.user, ...newUser };
      setUser(updatedUser);
      setState((state) => ({ ...state, user: updatedUser }));
    }
  };

  const initState: UserContextType = {
    user: getUser(),
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated: checkIsTokenSaved(),
    token: getToken(),
    updateUser,
  };

  const [state, setState] = useState<UserContextType>(initState);

  useEffect(() => {
    setState(initState);
    function storageEventHandler(event) {
      if (event.type === "logout") {
        handleLogout();
      }
    }
    // Hook up the event handler
    window.addEventListener("logout", storageEventHandler);
    return () => {
      // Remove the handler when the component unmounts
      window.removeEventListener("logout", storageEventHandler);
    };
  }, []);

  useEffect(() => {
    setState({ ...state, token: getToken() });
  }, [getToken()]);

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};
