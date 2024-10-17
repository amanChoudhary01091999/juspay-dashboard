import React from 'react';
import { Box, Typography, LinearProgress, useTheme } from '@mui/material';

const RevenueByLocation = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark

    const locations = [
        { city: 'New York', revenue: 72, progress: 72 },
        { city: 'San Francisco', revenue: 39, progress: 39 },
        { city: 'Sydney', revenue: 25, progress: 25 },
        { city: 'India', revenue: 20, progress: 20 },
        { city: 'China', revenue: 30, progress: 30 },
    ];

    return (
        <Box
            sx={{
                padding: '10px',
                borderRadius: '10px',
                backgroundColor: isDarkMode ? '#1e1e1e' : '#F1F3F4', // Black background for dark mode
                height: '330px',  // Fixed height
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                        fontSize: '12px',
                        color: isDarkMode ? '#ffffff' : '#000000', // Adjust title color for dark/light mode
                    }}
                >
                    Revenue by Location
                </Typography>
            </div>

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                }}
            >
                {/* Use an actual map image in your project */}
                <img
                    src='https://ik.imagekit.io/unizap/ndh/ndh-stores/stores_img/undefined/arijit_thendhgo_net/images/a1e195cf-4c86-46d7-91c8-52c73f0faa28.png'
                    width={"150px"}
                    height={"100px"}
                    alt="Map Icon"
                />
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {locations.map((location, index) => (
                    <Box key={index} sx={{ margin: "2px" }}>
                        {/* Row for city name and revenue on the same line */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            {/* City name with large bold text */}
                            <Typography
                                sx={{
                                    fontSize: '11px',
                                    color: isDarkMode ? '#ffffff' : '#000000', // Text color based on mode
                                }}
                            >
                                {location.city}
                            </Typography>

                            {/* Revenue value styled to match the screenshot */}
                            <Typography
                                sx={{
                                    fontSize: '10px',
                                    color: isDarkMode ? '#ffffff' : '#000000', // Text color based on mode
                                }}
                            >
                                {location.revenue}K
                            </Typography>
                        </Box>

                        {/* Progress bar below the city and revenue */}
                        <LinearProgress
                            variant="determinate"
                            value={location.progress}
                            sx={{
                                height: 2,  // Sleeker, thinner progress bar
                                borderRadius: 2.5,  // Rounded corners for a sleeker look
                                width: '100%',  // Full width of the container
                                backgroundColor: isDarkMode ? '#444444' : '#e0e0e0',  // Adjust unfilled part color
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: isDarkMode ? '#ffffff' : '#000000',  // Adjust filled portion color
                                },
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default RevenueByLocation;
