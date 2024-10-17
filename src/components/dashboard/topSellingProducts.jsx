import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, useTheme } from '@mui/material';

const TopSellingProducts = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkMode = theme.palette.mode === 'dark'; // Check if the theme is dark

    const products = [
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
    ];

    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: '10px',
                backgroundColor: isDarkMode ? '#1e1e1e' : '#F1F3F4', // Background color for dark/light mode
            }}
        >
            <Typography
                sx={{
                    fontWeight: 'bold',
                    margin: '10px',
                    fontSize: '16px',
                    color: isDarkMode ? '#ffffff' : '#000000', // Text color for dark/light mode
                }}
            >
                Top Selling Products
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>Name</TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">Price</TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">Quantity</TableCell>
                        <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow
                            key={index}
                            sx={{
                                '&:nth-of-type(odd)': {
                                    backgroundColor: isDarkMode ? '#2c2c2c' : '#f9f9f9', // Alternate row color for dark/light mode
                                },
                                '&:nth-of-type(even)': {
                                    backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
                                },
                            }}
                        >
                            <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }}>{product.name}</TableCell>
                            <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">
                                ${product.price.toFixed(2)}
                            </TableCell>
                            <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">
                                {product.quantity}
                            </TableCell>
                            <TableCell sx={{ color: isDarkMode ? '#ffffff' : '#000000' }} align="right">
                                ${product.amount.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TopSellingProducts;
