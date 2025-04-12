"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Tab,
  Tabs,
  Link,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { primary } from "@/shared/customization/theme/colors";
import { useForm } from "react-hook-form";
import Show from "@/shared/components/Show";
import EyeOffIcon from "@/shared/components/EyeOffIcon";
import { patternEmail, patternMobile, SERVER_URI } from "@/shared/utils";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { LoginInputData } from "@/shared/types";
import { UserContext } from "@/shared/common/authentication";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

// TabPanel Component to switch between login and signup forms
const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`auth-tabpanel-${index}`}
    aria-labelledby={`auth-tab-${index}`}
    {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

export const AuthModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  initialTab = 'login'
}) => {
  const { t } = useTranslation("Store");
  const router = useRouter();
  const [tabValue, setTabValue] = useState(initialTab === 'login' ? 0 : 1);
  const { login } = useContext(UserContext);

  // Login State
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  // Signup State
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Login Form
  const {
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
    register: registerLogin,
  } = useForm({
    mode: "all",
  });

  // Signup Form
  const {
    handleSubmit: handleSignupSubmit,
    formState: { errors: signupErrors },
    register: registerSignup,
    watch: watchSignup,
    getValues: getSignupValues,
  } = useForm({
    mode: "all",
  });

  // Login Mutation
  const loginMutation = useMutation({
    mutationFn: (userData: LoginInputData) => {
      return axios.post(`${SERVER_URI}/api/login`, userData);
    },
  });

  // Signup Mutation
  const signupMutation = useMutation({
    mutationFn: (userData: any) => {
      return axios.post(`${SERVER_URI}/api/customer/register`, userData);
    },
  });

  // Login handlers
  const handleLoginPasswordToggle = () => {
    setShowLoginPassword(!showLoginPassword);
  };

  const handleLoginSubmission = (data) => {
    loginMutation.mutate({
      email: data?.email,
      password: data?.password,
    });
  };

  // Signup handlers
  const handleSignupPasswordToggle = () => {
    setShowSignupPassword(!showSignupPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignupSubmission = (data: any) => {
    signupMutation.mutate({
      username: data?.username,
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone: data?.phone,
      password: data?.password,
      city: data?.city,
      address: data?.address,
    });
  };

  // Tab change handler
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Login effect
  useEffect(() => {
    if (loginMutation.isSuccess) {
      login(loginMutation.data?.data?.token, loginMutation.data?.data.user);
      onClose();
      router.push("/");
    }
    if (loginMutation.isError) {
      toast.error(t("Login failed. Please check your credentials."));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginMutation.isSuccess, loginMutation.isError, loginMutation.data]);

  // Signup effect
  const signupToastId = useRef<string | number | null>(null);
  useEffect(() => {
    if (signupMutation.isPending) {
      signupToastId.current = toast.info(
        <Box display="flex" alignItems="center">
          <CircularProgress size={24} sx={{ marginRight: "8px" }} />
          <Typography>{t("Submitting, please wait...")}</Typography>
        </Box>,
        { autoClose: false, closeOnClick: false, closeButton: false }
      );
    } else if (signupMutation.isError) {
      toast.dismiss(signupToastId.current!);
      toast.error(t("Error submitting the data"));
    } else if (signupMutation.isSuccess) {
      toast.dismiss(signupToastId.current!);
      toast.success(t("Successfully signed up. Please login."));
      setTabValue(0); // Switch to login tab after successful signup
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signupMutation.isPending, signupMutation.isError, signupMutation.isSuccess]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle
        sx={{
          backgroundColor: primary,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
          {tabValue === 0 ? t("Login") : t("Create an account")}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ mb: 2, mt: 2 }}
        >
          <Tab label={<Typography variant="h6" fontWeight="bold">{t("Login")}</Typography>} />
          <Tab label={<Typography variant="h6" fontWeight="bold">{t("Sign Up")}</Typography>} />
        </Tabs>

        {/* Login Form */}
        <TabPanel value={tabValue} index={0}>
          <Box mt={2} sx={{ textAlign: "center" }}>
            <Typography mb={1} color="primary" variant="h5" fontWeight="bold">
              {t("Welcome Back")}
            </Typography>
          </Box>
          <form onSubmit={handleLoginSubmit(handleLoginSubmission)}>
            <Box m={"1rem 0"}>
              <TextField
                fullWidth
                label={t("Email")}
                placeholder={t("Email")}
                error={Boolean(loginErrors?.email)}
                helperText={
                  loginErrors?.email?.message
                    ? t(String(loginErrors.email.message))
                    : ""
                }
                {...registerLogin("email", {
                  required: t("Email is required"),
                  pattern: patternEmail,
                })}
                defaultValue={"ziad.bahri@example.com"}
              />
            </Box>
            <Box m="1rem 0">
              <TextField
                fullWidth
                label={t("Password")}
                type={showLoginPassword ? "text" : "password"}
                placeholder={t("Password")}
                error={Boolean(loginErrors?.password)}
                helperText={
                  loginErrors?.password?.message
                    ? t(String(loginErrors.password.message))
                    : ""
                }
                {...registerLogin("password", {
                  required: t("Password is required"),
                })}
                defaultValue={"password123"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={handleLoginPasswordToggle}
                      >
                        {showLoginPassword ? <Show /> : <EyeOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Button
              onClick={handleLoginSubmit(handleLoginSubmission)}
              fullWidth
              variant="contained"
              type="submit"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                t("Login")
              )}
            </Button>
            <Box mt={2} sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                {t("I don't have an account")}
                <Button
                  color="primary"
                  sx={{ ml: 1 }}
                  onClick={() => setTabValue(1)}
                >
                  {t("Register Now")}
                </Button>
              </Typography>
            </Box>
          </form>
        </TabPanel>

        {/* Signup Form */}
        <TabPanel value={tabValue} index={1}>
          <Box mt={2} sx={{ textAlign: "center" }}>
            <Typography mb={1} fontWeight="bold" color="primary" variant="h5">
              {t("Welcome to")} Smart Store
            </Typography>
          </Box>
          <form onSubmit={handleSignupSubmit(handleSignupSubmission)}>
            <Box m={"1rem 0"}>
              <TextField
                fullWidth
                label={t("Username")}
                placeholder={t("Username")}
                error={Boolean(signupErrors?.username)}
                helperText={
                  signupErrors?.username?.message
                    ? t(String(signupErrors.username.message))
                    : ""
                }
                inputProps={{ maxLength: 10 }}
                {...registerSignup("username", {
                  required: t("Username is required"),
                })}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label={t("First name")}
                  placeholder={t("firstName")}
                  error={Boolean(signupErrors?.first_name)}
                  helperText={
                    signupErrors?.first_name?.message
                      ? t(String(signupErrors.first_name.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...registerSignup("first_name", {
                    required: t("First name is required"),
                  })}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label={t("Last name")}
                  placeholder={t("lastName")}
                  error={Boolean(signupErrors?.last_name)}
                  helperText={
                    signupErrors?.last_name?.message
                      ? t(String(signupErrors.last_name.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...registerSignup("last_name", {
                    required: t("Last name is required"),
                  })}
                />
              </Box>
            </Box>
            <Box m={"1rem 0"}>
              <TextField
                fullWidth
                label={t("Email")}
                placeholder={t("Email")}
                error={Boolean(signupErrors?.email)}
                helperText={
                  signupErrors?.email?.message
                    ? t(String(signupErrors.email.message))
                    : ""
                }
                {...registerSignup("email", {
                  required: t("Email is required"),
                  pattern: patternEmail,
                })}
              />
            </Box>
            <Box m={"1rem 0"}>
              <TextField
                fullWidth
                label={t("Phone Number")}
                placeholder={t("Phone Number")}
                error={Boolean(signupErrors?.phone)}
                helperText={
                  signupErrors?.phone?.message
                    ? t(String(signupErrors.phone.message))
                    : ""
                }
                inputProps={{ maxLength: 13, dir: "ltr" }}
                {...registerSignup("phone", {
                  required: t("Phone number is required"),
                  pattern: patternMobile,
                })}
              />
            </Box>
            <Box m="1rem 0">
              <TextField
                fullWidth
                label={t("Password")}
                type={showSignupPassword ? "text" : "password"}
                placeholder={t("Password")}
                error={Boolean(signupErrors?.password)}
                helperText={
                  signupErrors?.password?.message
                    ? t(String(signupErrors.password.message))
                    : ""
                }
                {...registerSignup("password", {
                  required: t("Password is required"),
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={handleSignupPasswordToggle}
                      >
                        {showSignupPassword ? <Show /> : <EyeOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box m="1rem 0">
              <TextField
                fullWidth
                label={t("Confirm Password")}
                type={showConfirmPassword ? "text" : "password"}
                placeholder={t("Confirm Password")}
                error={Boolean(signupErrors?.confirmPassword)}
                helperText={
                  signupErrors?.confirmPassword?.message
                    ? t(String(signupErrors.confirmPassword.message))
                    : ""
                }
                {...registerSignup("confirmPassword", {
                  required: t("Confirm Password is required"),
                  pattern: {
                    value: /(.{8})/,
                    message: t("Password must be at least 8 characters"),
                  },
                  validate: (value) => {
                    // Get the password field value from the current form
                    const password = watchSignup('password');
                    return password === value || t("The password field confirmation does not match.");
                  }
                  
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={handleConfirmPasswordToggle}
                      >
                        {showConfirmPassword ? <Show /> : <EyeOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label={t("City")}
                  placeholder={t("city")}
                  error={Boolean(signupErrors?.city)}
                  helperText={
                    signupErrors?.city?.message
                      ? t(String(signupErrors.city.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...registerSignup("city", {
                    required: t("City is required"),
                  })}
                />
              </Box>
              <Box sx={{ flex: 1 }}>
                <TextField
                  fullWidth
                  label={t("Address")}
                  placeholder={t("Address")}
                  error={Boolean(signupErrors?.address)}
                  helperText={
                    signupErrors?.address?.message
                      ? t(String(signupErrors.address.message))
                      : ""
                  }
                  inputProps={{ maxLength: 10 }}
                  {...registerSignup("address", {
                    required: t("Address is required"),
                  })}
                />
              </Box>
            </Box>
            <Box mt={2}>
              <Button
                onClick={handleSignupSubmit(handleSignupSubmission)}
                fullWidth
                variant="contained"
                type="submit"
                disabled={signupMutation.isPending}
              >
                {signupMutation.isPending ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  t("Register Now")
                )}
              </Button>
            </Box>
            <Box mt={2} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Typography variant="body2">
                <span style={{ color: 'black' }}>
                  {t("I already have an account")}
                </span>
                <Link
                  color="primary"
                  onClick={() => setTabValue(0)}
                >
                  {t("Login")}
                </Link>
              </Typography>
            </Box>
          </form>
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
