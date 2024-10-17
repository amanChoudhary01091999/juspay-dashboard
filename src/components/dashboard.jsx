import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import DashboardCard from './dashboard/cards';
import ProjectionsCard from './dashboard/orderChart';
import RevenueChart from './dashboard/revenueChart';
import RevenueByLocation from './dashboard/revenueByLocation';
import TopSellingProducts from './dashboard/topSellingProducts';
import TotalSales from './dashboard/sales';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = ({ mode }) => {
    console.log({ mode })

    return (
        <Box sx={{ padding: '20px', bgcolor: 'background.paper' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: '200', fontSize: '20px' }}>
                eCommerce
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <DashboardCard mode={mode} />
                </Grid>
                <Grid item xs={6}>
                    <ProjectionsCard mode={mode} />
                </Grid>
                <Grid item xs={9}>
                    <RevenueChart mode={mode} />
                </Grid>
                <Grid item xs={3}>
                    <RevenueByLocation mode={mode} />
                </Grid>
                <Grid item xs={9}>
                    <TopSellingProducts mode={mode} />
                </Grid>
                <Grid item xs={3}>
                    <TotalSales mode={mode} />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Dashboard;
