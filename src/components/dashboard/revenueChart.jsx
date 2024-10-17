import React from 'react';
import { Line } from 'react-chartjs-2';
import { Box, Typography, useTheme } from '@mui/material';
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

const RevenueChart = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Previous Week',
                data: [10, 15, 12, 18, 22, 28],
                borderColor: '#C5CAE9', // Light color for previous week in both modes
                backgroundColor: 'rgba(197, 202, 233, 0.3)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Current Week',
                data: [8, 10, 12, 20, 25, 30],
                borderColor: isDarkMode ? '#ffffff' : '#000000', // White line for dark mode, black for light
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)', // Adjust fill for dark/light mode
                // borderDash: [5, 5],
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    color: isDarkMode ? '#ffffff' : '#000000', // Adjust legend color for dark/light mode
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: isDarkMode ? '#333333' : '#ffffff', // Adjust tooltip background color for dark/light mode
                titleColor: isDarkMode ? '#ffffff' : '#000000', // Adjust tooltip title color
                bodyColor: isDarkMode ? '#ffffff' : '#000000',  // Adjust tooltip text color
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30,
                ticks: {
                    stepSize: 10,
                    color: isDarkMode ? '#ffffff' : '#000000', // Adjust Y-axis labels for dark/light mode
                },
                grid: {
                    color: isDarkMode ? '#444444' : '#cccccc', // Adjust grid color for dark/light mode
                },
            },
            x: {
                ticks: {
                    color: isDarkMode ? '#ffffff' : '#000000', // Adjust X-axis labels for dark/light mode
                },
                grid: {
                    color: isDarkMode ? '#444444' : '#cccccc', // Adjust grid color for dark/light mode
                },
            },
        },
    };

    return (
        <Box
            sx={{
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: isDarkMode ? '#1e1e1e' : '#F1F3F4', // Black background for dark mode, light for light mode
            }}
        >
            <Box display="flex" alignItems="center" mb={2}>
                <Typography
                    variant="h6"
                    sx={{
                        marginRight: '15px',
                        fontWeight: 500,
                        fontSize: '16px',
                        color: isDarkMode ? '#ffffff' : '#000000', // Adjust title color for dark/light mode
                    }}
                >
                    Revenue
                </Typography>
                <Box display="flex" alignItems="center" sx={{ marginRight: 2 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: isDarkMode ? '#ffffff' : '#000000', marginRight: '4px' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            marginRight: 1,
                            fontWeight: 400,
                            fontSize: '11px',
                            color: isDarkMode ? '#ffffff' : '#000000', // Adjust text color for "Current Week"
                        }}
                    >
                        Current Week
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ fontSize: '11px', color: isDarkMode ? '#ffffff' : '#000000' }} // Adjust data color
                    >
                        $58,211
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon sx={{ fontSize: 10, color: '#C5CAE9', marginRight: '4px' }} />
                    <Typography
                        variant="body2"
                        sx={{
                            marginRight: 1,
                            fontWeight: 400,
                            fontSize: '11px',
                            color: isDarkMode ? '#ffffff' : '#000000', // Adjust text color for "Previous Week"
                        }}
                    >
                        Previous Week
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '11px', color: isDarkMode ? '#ffffff' : '#000000' }}>
                        $68,768
                    </Typography>
                </Box>
            </Box>
            <Line data={data} options={options} />
        </Box>
    );
};

export default RevenueChart;
