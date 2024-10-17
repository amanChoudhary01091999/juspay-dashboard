import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const TopSellingProducts = () => {
    const products = [
        { name: 'ASOS Ridley High Waist', price: 79.49, quantity: 82, amount: 6518.18 },
        { name: 'Marco Lightweight Shirt', price: 128.50, quantity: 37, amount: 4754.50 },
        { name: 'Half Sleeve Shirt', price: 39.99, quantity: 64, amount: 2559.36 },
        { name: 'Lightweight Jacket', price: 20.00, quantity: 184, amount: 3680.00 },
        { name: 'Marco Shoes', price: 79.49, quantity: 64, amount: 1965.81 },
    ];

    return (
        <TableContainer component={Paper} sx={{ borderRadius: '10px', backgroundColor: '#F1F3F4' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', margin: '10px' }}>
                Top Selling Products
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell>{product.name}</TableCell>
                            <TableCell align="right">${product.price.toFixed(2)}</TableCell>
                            <TableCell align="right">{product.quantity}</TableCell>
                            <TableCell align="right">${product.amount.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TopSellingProducts;
