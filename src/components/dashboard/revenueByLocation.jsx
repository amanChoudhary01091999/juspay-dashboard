import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import MapIcon from '@mui/icons-material/Public'; // You can replace this with an actual map image

const RevenueByLocation = () => {
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
                backgroundColor: "#F1F3F4",
                height: '330px',  // Set the fixed height
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '12px', margin: 'auto  ' }}>
                    Revenue by Location
                </Typography>
            </div>

            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
                {/* Use an actual map image in your project */}
                <img src='https://ik.imagekit.io/unizap/ndh/ndh-stores/stores_img/undefined/arijit_thendhgo_net/images/a1e195cf-4c86-46d7-91c8-52c73f0faa28.png' width={"150px"} height={"100px"} alt="Map Icon" />
            </Box>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

                                sx={{ fontSize: '11px' }}
                            >
                                {location.city}
                            </Typography>

                            {/* Revenue value styled to match the screenshot */}
                            <Typography
                                sx={{ fontSize: '10px' }}
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
                                backgroundColor: '#e0e0e0',  // Light gray background for unfilled part
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#000',  // Black color for the filled portion
                                },
                            }}
                        />

                    </Box>
                ))}
            </Box>
        </Box >
    );
};

export default RevenueByLocation;
