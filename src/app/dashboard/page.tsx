"use client";
import PageWrapper from "@/shared/components/PageWrapper/PageWrapper";
import { Box, Card, Typography, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Chart, registerables } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useUserActivity } from "@/shared/api/admin/userActivity";
import { useOrdersStatistics } from "@/shared/api/admin/ordersStatistics";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { UserActivityData } from "@/shared/types";
import CustomTable from "@/shared/components/Table/CustomTable";

Chart.register(...registerables);

export default function Dashboard() {
  const { t } = useTranslation("Store");

  const { data, isLoading, error } = useUserActivity();
  const userActivity: UserActivityData | undefined = data;
  const {
    data: ordersData,
    isLoading: isOrdersLoading,
    error: ordersError,
  } = useOrdersStatistics();

  // Extract user activity statistics
  const totalUsers = userActivity?.total_users || 0;
  const activeToday = userActivity?.active_today || 0;
  const activeThisWeek = userActivity?.active_this_week || 0;
  const activeThisMonth = userActivity?.active_this_month || 0;
  const mostActiveUsers = userActivity?.most_active_users || [];
  const inactiveToday = totalUsers - activeToday;

  const numCustomers =
    data?.users_by_role?.find((u) => u.role === "customer")?.total || 0;
  const numAdmins =
    data?.users_by_role?.find((u) => u.role === "admin")?.total || 0;

  const activePieData = {
    labels: [t("Active Today"), t("Inactive Today")],
    datasets: [
      {
        data: [activeToday, inactiveToday],
        backgroundColor: ["#4CAF50", "#F44336"],
      },
    ],
  };

  const activeBarData = {
    labels: [t("Today"), t("This Week"), t("This Month")],
    datasets: [
      {
        label: t("Active Users"),
        data: [activeToday, activeThisWeek, activeThisMonth],
        backgroundColor: ["#2196F3", "#FFCE56", "#36A2EB"],
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

  return (
    <PageWrapper>
      <Box sx={{ width: "100%", padding: "20px" }}>
        {/* Orders and Products */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
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
                <Typography variant="h6">{t("Products Count")}</Typography>
                <Typography variant="h4">30</Typography>
              </Box>
              <LocalOfferIcon fontSize="large" color="error" />
            </Card>
          </Grid>
        </Grid>
        {/* Charts */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {t("Active vs Inactive Users Today")}
              </Typography>
              <Pie data={activePieData} />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {t("Active Users by Period")}
              </Typography>
              <Bar data={activeBarData} />
            </Card>
          </Grid>
        </Grid>
        {/* Most Active Users Table */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12}>
            <Card sx={{ padding: "20px" }}>
              <Typography variant="h6" gutterBottom>
                {t("Most Active Users")}
              </Typography>
              <CustomTable
                columns={[
                  {
                    key: "username",
                    header: t("Username"),
                    accessor: "username",
                  },
                  { key: "email", header: t("Email"), accessor: "email" },
                  {
                    key: "last_active",
                    header: t("Last Active"),
                    accessor: "last_active",
                  },
                ]}
                data={mostActiveUsers}
                pageSize={10}
                pageIndex={0}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageWrapper>
  );
}
