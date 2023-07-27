import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Head from "next/head";
import DashboardLayout from "@/components/layouts/DashboardLayouts";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const theme = useTheme();
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const labels = ["a", "b", "c", "d"];

  const data = {
    labels,
    datasets: [
      {
        label: "Teams Strength",
        data: [15, 20, 17, 30],
        backgroundColor: [
          theme.palette.warning.main,
          theme.palette.orange.main,
          theme.palette.skyBlue.main,
          theme.palette.primary.main,
        ],
      },
    ],
  };
  return (
    <>
      <DashboardLayout>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="inherit"
                    gutterBottom
                  >
                    Teams Strength
                  </Typography>
                  <Box my={3}>
                    <Bar options={options} data={data} />
                  </Box>
                  <Grid
                    container
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={12} md={6}>
                      <Chip sx={{ px: 1 }} label="a" color="warning" />{" "}
                      Marketing
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Chip sx={{ px: 1 }} label="b" color="orange" />{" "}
                      Developers
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Chip sx={{ px: 1 }} label="c" color="skyBlue" /> HR
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Chip sx={{ px: 1 }} label="d" color="primary" /> Design
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}></Grid>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Grid>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
