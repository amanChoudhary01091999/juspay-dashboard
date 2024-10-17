import React from 'react';
import { Grid, Card, Typography, Box, useTheme } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const DashboardCards = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark
    return (
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start" height={"380px"}>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        padding: '30px',
                        backgroundColor: '#E0F7FA',
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '14px', color: 'black', transition: 'transform 0.3s', '&:hover': { transform: 'translateX(10px)' } }}>
                        Customers
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px', marginRight: '10px', color: 'black' }}>
                            3,781
                        </Typography>
                        <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold' }}>
                                +11.01%
                            </Typography>
                            <TrendingUpIcon sx={{ color: 'green', fontSize: '20px' }} />
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        padding: '30px',
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#F1F3F4',
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '14px', transition: 'transform 0.3s', '&:hover': { transform: 'translateX(10px)' } }}>
                        Orders
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px', marginRight: '10px' }}>
                            1,219
                        </Typography>
                        <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ color: 'red', fontWeight: 'bold' }}>
                                -0.03%
                            </Typography>
                            <TrendingUpIcon sx={{ color: 'red', fontSize: '20px' }} />
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        padding: '30px',
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#FFF3E0',
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', fontSize: '14px', transition: 'transform 0.3s', '&:hover': { transform: 'translateX(10px)' } }}>
                        Revenue
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px', marginRight: '10px' }}>
                            $695
                        </Typography>
                        <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold' }}>
                                +15.03%
                            </Typography>
                            <TrendingUpIcon sx={{ color: 'green', fontSize: '20px' }} />
                        </Box>
                    </Box>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card
                    sx={{
                        padding: '30px',
                        backgroundColor: '#E3F2FD',
                        borderRadius: '10px',
                    }}
                >
                    <Typography variant="subtitle2" sx={{ color: 'black', fontWeight: 'bold', fontSize: '14px', transition: 'transform 0.3s', '&:hover': { transform: 'translateX(10px)' } }}>
                        Growth
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', fontSize: '24px', marginRight: '10px' }}>
                            30.1%
                        </Typography>
                        <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                            <Typography variant="body2" sx={{ color: 'green', fontWeight: 'bold' }}>
                                +6.08%
                            </Typography>
                            <TrendingUpIcon sx={{ color: 'green', fontSize: '20px' }} />
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DashboardCards;
