import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // Import the filled dot icon
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const RevenueChart = ({ mode }) => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Previous Week',
                data: [10, 15, 12, 18, 22, 28],
                borderColor: '#C5CAE9',
                backgroundColor: 'rgba(197, 202, 233, 0.3)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Current Week',
                data: [8, 10, 12, 20, 25, 30],
                borderColor: '#000000',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                borderDash: [5, 5],
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30,
                ticks: {
                    stepSize: 10,
                },
            },
        },
    };

    return (
        <Box sx={{ padding: '20px', borderRadius: '10px' }} backgroundColor={mode ? 'black' : "#F1F3F4"}>
            <Box display="flex" alignItems="center" mb={2}>
                <Typography variant="h6" sx={{ marginRight: '15px', fontWeight: 'bold', fontSize: '16px' }}>
                    Revenue
                </Typography>
                <Box display="flex" alignItems="center" sx={{ marginRight: 2 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: '#000000', marginRight: '4px' }} />
                    <Typography variant="body2" sx={{ marginRight: 1, fontWeight: 'bold', fontSize: '14px' }}>
                        Current Week
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '14px' }}>$58,211</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: '#C5CAE9', marginRight: '4px' }} />
                    <Typography variant="body2" sx={{ marginRight: 1, fontWeight: 'bold', fontSize: '14px' }}>
                        Previous Week
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '14px', color: 'black' }}>$68,768</Typography>
                </Box>
            </Box>
            <Line data={data} options={options} />
        </Box>
    );
};

export default RevenueChart;
