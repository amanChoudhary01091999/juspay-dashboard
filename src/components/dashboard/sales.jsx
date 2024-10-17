import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Grid, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Sample sales data
const salesData = [
    { name: 'Direct', value: 300.56, color: '#000000' },
    { name: 'Affiliate', value: 135.18, color: '#b4e197' },
    { name: 'Sponsored', value: 154.02, color: '#a2c4f9' },
    { name: 'Email', value: 200.02, color: 'lightgreen' }
];

const TotalSales = () => {
    return (
        <Box sx={{
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: "#F1F3F4",
            height: '370px',  // Fixed height
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center" gutterBottom sx={{ fontSize: '14px' }}>
                        Total Sales
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center">
                        <PieChart width={180} height={180}> {/* Reduce the size */}
                            <Pie
                                data={salesData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={50} // Reduce the inner radius
                                outerRadius={80} // Reduce the outer radius
                                fill="#8884d8"
                                paddingAngle={5}
                            >
                                {salesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <List>
                        {salesData.map((source) => (
                            <ListItem key={source.name} sx={{ alignItems: 'center', padding: '0px 0px 4px 0px' }}> {/* Align vertically */}
                                <ListItemIcon sx={{ minWidth: '20px', marginTop: '0px' }}> {/* Reduced minWidth */}
                                    <FiberManualRecordIcon sx={{ color: source.color, fontSize: 8 }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '1.2' }} component="span">
                                            {source.name}
                                        </Typography>
                                    }
                                    sx={{ margin: '0px' }} // Remove margin from ListItemText
                                />
                                <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '1.2' }} component="span">
                                    ${source.value.toFixed(2)}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TotalSales;
