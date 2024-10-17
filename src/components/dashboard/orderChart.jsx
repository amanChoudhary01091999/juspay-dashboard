import React from 'react';
import { Card, Typography, Grid } from '@mui/material';
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
    return (
        <Grid container spacing={2} display={'flex'} justifyContent={'flex-start'}>
            {/* Projections vs Actuals Card */}
            <Grid item xs={12} md={12}>
                <Card
                    sx={{
                        // padding: '20px',
                        paddingTop: '20px',
                        paddingBottom: '20px',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '16px',
                            padding: '5px'
                        }}
                    >
                        Projections vs Actuals
                    </Typography>
                    {/* Responsive Bar Chart */}
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={data} barSize={25}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="actual" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </Grid>
        </Grid>
    );
};

export default ProjectionsCard;




