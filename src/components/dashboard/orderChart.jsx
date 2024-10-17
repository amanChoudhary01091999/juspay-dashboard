import React from 'react';
import { Card, Typography, Grid, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', actual: 10, projection: '30M' },
    { name: 'Feb', actual: 15, projection: '25M' },
    { name: 'Mar', actual: 20, projection: '15M' },
    { name: 'Apr', actual: 25, projection: '10M' },
    { name: 'May', actual: 18, projection: '5M' },
    { name: 'Jun', actual: 24, projection: '0M' },
];

const ProjectionsCard = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark

    return (
        <Grid container spacing={2} display={'flex'} justifyContent={'flex-start'}>
            {/* Projections vs Actuals Card */}
            <Grid item xs={12} md={12}>
                <Card
                    sx={{
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundColor: isDarkMode ? '#1e1e1e' : '#F1F3F4', // Conditional background color
                        borderRadius: '10px',
                        width: '100%',
                        height: '100%',
                        color: isDarkMode ? 'white' : 'black', // Conditional text color
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '16px',
                            padding: '5px',
                            color: isDarkMode ? 'white' : 'black', // Adjust Typography color for light/dark mode
                        }}
                    >
                        Projections vs Actuals
                    </Typography>
                    {/* Responsive Bar Chart */}
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data} barSize={25}>
                            <XAxis dataKey="name" stroke={isDarkMode ? '#fff' : '#000'} /> {/* Adjust axis color */}
                            <YAxis stroke={isDarkMode ? '#fff' : '#000'} /> {/* Adjust axis color */}
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: isDarkMode ? '#555' : '#fff',
                                    color: isDarkMode ? 'white' : 'black',
                                }}
                            />
                            <Bar dataKey="actual" fill={isDarkMode ? '#4caf50' : '#82ca9d'} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProjectionsCard;
