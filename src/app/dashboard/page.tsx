"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Card, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { commonCardStyles } from "./dashboardStyles";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useUserActivity } from "@/shared/api/admin/userActivity";
import { useOrdersStatistics } from "@/shared/api/admin/ordersStatistics";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

Chart.register(...registerables);

export default function Dashboard() {
  const { t } = useTranslation("Store");
  const classes = commonCardStyles();

  const { data, isLoading, error } = useUserActivity();
  const {
    data: ordersData,
    isLoading: isOrdersLoading,
    error: ordersError,
  } = useOrdersStatistics();

  // Extract number of customers and admins from user activity data
  const numCustomers =
    data?.users_by_role?.find((u) => u.role === "customer")?.total || 0;
  const numAdmins =
    data?.users_by_role?.find((u) => u.role === "admin")?.total || 0;

  const userRoles = data?.users_by_role?.map((role) => role.role) || [];
  const userCounts = data?.users_by_role?.map((role) => role.total) || [];

  const pieData = {
    labels: ["Active Today", "Inactive Today"],
    datasets: [
      {
        data: [data?.active_today, data?.total_users - data?.active_today],
        backgroundColor: ["#FFCE56", "#E7E9ED"],
      },
    ],
  };

  const activeCustomers =
    data?.users_by_role.find((role) => role.role === "customer")
      ?.active_today || 0;
  const totalCustomers =
    data?.users_by_role.find((role) => role.role === "customer")?.total || 0;
  const totalAdmins =
    data?.users_by_role.find((role) => role.role === "admin")?.total || 0;

  const adminPieData = {
    labels: ["Active Admins", "Inactive Admins"],
    datasets: [
      {
        data: [totalAdmins, data?.total_users - totalAdmins],
        backgroundColor: ["#2196F3", "#FF5722"],
      },
    ],
  };

  const customerPieData = {
    labels: ["Active Customers", "Inactive Customers"],
    datasets: [
      {
        data: [activeCustomers, totalCustomers - activeCustomers],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const rolePieData = {
    labels: userRoles,
    datasets: [
      {
        data: userCounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#F44336",
        ],
      },
    ],
  };

  const ordersPieData = {
    labels: ["Pending Orders", "Processing Orders", "Cancelled Orders"],
    datasets: [
      {
        data: [
          ordersData?.pending_orders,
          ordersData?.processing_orders,
          ordersData?.cancelled_orders,
        ],
        backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384"],
      },
    ],
  };

  if (isLoading || isOrdersLoading) {
    return (
      <Box sx={{ width: "100%" }}>
        <Card>
          <Typography variant="h6" gutterBottom>
            {t("Loading User and Orders Statistics...")}
          </Typography>
        </Card>
      </Box>
    );
  }

  if (error || ordersError) {
    return (
      <Box sx={{ width: "100%" }}>
        <Card>
          <Typography variant="h6" gutterBottom>
            {t("Error loading User and Orders Statistics")}
          </Typography>
          <Typography variant="body2" color="error">
            {error?.message || ordersError?.message}
          </Typography>
        </Card>
      </Box>
    );
  }

  if (!ordersData) {
    return (
      <Box sx={{ width: "100%" }}>
        <Card>
          <Typography variant="h6" gutterBottom>
            {t("No Orders Statistics Available")}
          </Typography>
        </Card>
      </Box>
    );
  }

  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Page Views",
        data: ordersData.monthly_page_views,
        backgroundColor: "#FF6384",
      },
      {
        label: "Clicks",
        data: ordersData.monthly_clicks,
        backgroundColor: "#36A2EB",
      },
    ],
  };

  return (
    <PageWrapper>
      <Box sx={{ width: "100%", padding: "20px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">{t("Customers count")}</Typography>
                <Typography variant="h4">{numCustomers}</Typography>
              </Box>
              <PeopleIcon fontSize="large" color="primary" />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">{t("Admins count")}</Typography>
                <Typography variant="h4">{numAdmins}</Typography>
              </Box>
              <PeopleIcon fontSize="large" color="secondary" />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">{t("Total Orders")}</Typography>
                <Typography variant="h4">{ordersData.total_orders}</Typography>
              </Box>
              <ShoppingCartIcon fontSize="large" color="success" />
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6">{t("Deals")}</Typography>
                <Typography variant="h4">{ordersData.deals}</Typography>
              </Box>
              <LocalOfferIcon fontSize="large" color="error" />
            </Card>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "20px" }}>
          <Card sx={{ padding: "20px" }}>
            <Typography variant="h6" gutterBottom>
              {t("Performance")}
            </Typography>
            <Box sx={{ height: "300px" }}>
              <Bar data={barData} />
            </Box>
          </Card>
        </Box>
      </Box>
    </PageWrapper>
  );
}
