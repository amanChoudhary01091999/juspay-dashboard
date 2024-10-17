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

const Dashboard = () => {

    return (
        <Box sx={{ paddingRight: '10px', bgcolor: 'background.paper' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '10px' }}>
                eCommerce
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={6}>
                    <DashboardCard />
                </Grid>
                <Grid item xs={6}>
                    <ProjectionsCard />
                </Grid>
                <Grid item xs={9}>
                    <RevenueChart />
                </Grid>
                <Grid item xs={3}>
                    <RevenueByLocation />
                </Grid>
                <Grid item xs={9}>
                    <TopSellingProducts />
                </Grid>
                <Grid item xs={3}>
                    <TotalSales />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Dashboard;
