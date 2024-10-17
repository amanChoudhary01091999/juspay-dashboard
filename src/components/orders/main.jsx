import React, { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Box, TextField, IconButton, Avatar, Chip, Pagination, useTheme, Typography } from '@mui/material';
import { Add, FilterList, SwapVert } from '@mui/icons-material';

const Order = () => {
    const theme = useTheme(); // Access the current theme
    const isDarkTheme = theme.palette.mode === 'dark'; // Check if the theme is dark
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const statusRenderer = (params) => {
        const { value } = params;
        let color = 'default';
        switch (value) {
            case 'In Progress':
                color = 'primary';
                break;
            case 'Complete':
                color = 'success';
                break;
            case 'Pending':
                color = 'warning';
                break;
            case 'Approved':
                color = 'info';
                break;
            case 'Rejected':
                color = 'error';
                break;
            default:
                color = 'default';
        }
        return <Chip label={value} color={color} size="small" />;
    };

    const userRenderer = (params) => {
        const { value, data } = params;
        return (
            <Box display="flex" alignItems="center">
                <Avatar src={data.userAvatar} sx={{ width: 24, height: 24, marginRight: 1 }} />
                {value}
            </Box>
        );
    };

    const dateRenderer = (params) => {
        const { value } = params;
        return (
            <Box display="flex" alignItems="center">
                <span style={{ marginRight: '4px' }}>📅</span>
                {value}
            </Box>
        );
    };

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    const columnDefs = useMemo(() => [
        { headerName: '', field: 'checkbox', checkboxSelection: true, headerCheckboxSelection: true, width: 50 },
        { headerName: 'Order ID', field: 'orderId', sortable: true, filter: true },
        { headerName: 'User', field: 'user', sortable: true, filter: true, cellRenderer: userRenderer },
        { headerName: 'Project', field: 'project', sortable: true, filter: true },
        { headerName: 'Address', field: 'address', sortable: true, filter: true },
        { headerName: 'Date', field: 'date', sortable: true, filter: true, cellRenderer: dateRenderer },
        { headerName: 'Status', field: 'status', sortable: true, filter: true, cellRenderer: statusRenderer },
    ], []);

    const defaultColDef = useMemo(() => ({
        flex: 1,
        minWidth: 100,
        resizable: true,
    }), []);

    const rowData = [
        { orderId: '#CM9801', user: 'Natali Craig', userAvatar: 'https://randomuser.me/api/portraits/women/10.jpg', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
        { orderId: '#CM9802', user: 'Kate Morrison', userAvatar: 'https://randomuser.me/api/portraits/women/11.jpg', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
        { orderId: '#CM9803', user: 'Drew Cano', userAvatar: 'https://randomuser.me/api/portraits/men/10.jpg', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
        { orderId: '#CM9804', user: 'Orlando Diggs', userAvatar: 'https://randomuser.me/api/portraits/men/11.jpg', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
        { orderId: '#CM9805', user: 'Andi Lane', userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
        { orderId: '#CM9806', user: 'Emily Wong', userAvatar: 'https://randomuser.me/api/portraits/women/13.jpg', project: 'E-commerce Site', address: 'Pine Road Denver', date: '3 hours ago', status: 'In Progress' },
        { orderId: '#CM9807', user: 'Jason Bourne', userAvatar: 'https://randomuser.me/api/portraits/men/12.jpg', project: 'Social Media App', address: '2nd Avenue New York', date: '5 hours ago', status: 'Complete' },
        { orderId: '#CM9808', user: 'Sarah Connor', userAvatar: 'https://randomuser.me/api/portraits/women/14.jpg', project: 'Mobile Application', address: 'St. Patrick Street Boston', date: '6 hours ago', status: 'Pending' },
        { orderId: '#CM9809', user: 'John Doe', userAvatar: 'https://randomuser.me/api/portraits/men/13.jpg', project: 'Portfolio Website', address: 'Elm Street Chicago', date: '1 day ago', status: 'Approved' },
        { orderId: '#CM9810', user: 'Mary Jane', userAvatar: 'https://randomuser.me/api/portraits/women/15.jpg', project: 'Landing Page', address: 'Oak Street Miami', date: '2 days ago', status: 'Rejected' },
        { orderId: '#CM9811', user: 'Tony Stark', userAvatar: 'https://randomuser.me/api/portraits/men/14.jpg', project: 'E-commerce Site', address: '4th Street Seattle', date: '3 days ago', status: 'In Progress' },
        { orderId: '#CM9812', user: 'Bruce Wayne', userAvatar: 'https://randomuser.me/api/portraits/men/15.jpg', project: 'CRM Admin pages', address: 'Gotham City', date: '4 days ago', status: 'Complete' },
        { orderId: '#CM9813', user: 'Clark Kent', userAvatar: 'https://randomuser.me/api/portraits/men/16.jpg', project: 'Client Project', address: 'Metropolis', date: '5 days ago', status: 'Pending' },
        { orderId: '#CM9814', user: 'Diana Prince', userAvatar: 'https://randomuser.me/api/portraits/women/16.jpg', project: 'Admin Dashboard', address: 'Themyscira', date: '6 days ago', status: 'Approved' },
        { orderId: '#CM9815', user: 'Peter Parker', userAvatar: 'https://randomuser.me/api/portraits/men/17.jpg', project: 'App Landing Page', address: 'Queens', date: '7 days ago', status: 'Rejected' },
        { orderId: '#CM9816', user: 'Wade Wilson', userAvatar: 'https://randomuser.me/api/portraits/men/18.jpg', project: 'Mobile Application', address: 'Mercy Hospital', date: '1 week ago', status: 'In Progress' },
        { orderId: '#CM9817', user: 'Harley Quinn', userAvatar: 'https://randomuser.me/api/portraits/women/17.jpg', project: 'Social Media App', address: 'Gotham City', date: '2 weeks ago', status: 'Complete' },
        { orderId: '#CM9818', user: 'Natasha Romanoff', userAvatar: 'https://randomuser.me/api/portraits/women/18.jpg', project: 'Portfolio Website', address: 'S.H.I.E.L.D HQ', date: '3 weeks ago', status: 'Pending' },
        { orderId: '#CM9819', user: 'Steve Rogers', userAvatar: 'https://randomuser.me/api/portraits/men/19.jpg', project: 'E-commerce Site', address: 'Brooklyn', date: '4 weeks ago', status: 'Approved' },
        { orderId: '#CM9820', user: 'Thor Odinson', userAvatar: 'https://randomuser.me/api/portraits/men/20.jpg', project: 'CRM Admin pages', address: 'Asgard', date: '5 weeks ago', status: 'Rejected' },
        { orderId: '#CM9821', user: 'Tony Stark', userAvatar: 'https://randomuser.me/api/portraits/men/21.jpg', project: 'Landing Page', address: 'Stark Tower', date: '6 weeks ago', status: 'In Progress' },
        { orderId: '#CM9822', user: 'Vision', userAvatar: 'https://randomuser.me/api/portraits/men/22.jpg', project: 'Mobile Application', address: 'Wakanda', date: '7 weeks ago', status: 'Complete' },
        { orderId: '#CM9823', user: 'Scarlet Witch', userAvatar: 'https://randomuser.me/api/portraits/women/19.jpg', project: 'Admin Dashboard', address: 'Westview', date: '8 weeks ago', status: 'Pending' },
        { orderId: '#CM9824', user: 'Bucky Barnes', userAvatar: 'https://randomuser.me/api/portraits/men/23.jpg', project: 'Client Project', address: 'New York', date: '9 weeks ago', status: 'Approved' },
        { orderId: '#CM9825', user: 'Rocket Raccoon', userAvatar: 'https://randomuser.me/api/portraits/men/24.jpg', project: 'App Landing Page', address: 'Xandar', date: '10 weeks ago', status: 'Rejected' },
        { orderId: '#CM9826', user: 'Gamora', userAvatar: 'https://randomuser.me/api/portraits/women/20.jpg', project: 'Social Media App', address: 'Knowhere', date: '11 weeks ago', status: 'In Progress' },
        { orderId: '#CM9827', user: 'Drax', userAvatar: 'https://randomuser.me/api/portraits/men/25.jpg', project: 'Portfolio Website', address: 'Guardians HQ', date: '12 weeks ago', status: 'Complete' },
        { orderId: '#CM9828', user: 'Peter Quill', userAvatar: 'https://randomuser.me/api/portraits/men/26.jpg', project: 'E-commerce Site', address: 'Earth', date: '13 weeks ago', status: 'Pending' },
        { orderId: '#CM9829', user: 'Loki', userAvatar: 'https://randomuser.me/api/portraits/men/27.jpg', project: 'CRM Admin pages', address: 'Asgard', date: '14 weeks ago', status: 'Approved' },
        { orderId: '#CM9830', user: 'Doctor Strange', userAvatar: 'https://randomuser.me/api/portraits/men/28.jpg', project: 'Landing Page', address: 'Kamar-Taj', date: '15 weeks ago', status: 'Rejected' },
        { orderId: '#CM9831', user: 'Wanda Maximoff', userAvatar: 'https://randomuser.me/api/portraits/women/21.jpg', project: 'Mobile Application', address: 'Westview', date: '16 weeks ago', status: 'In Progress' },
        { orderId: '#CM9832', user: 'Black Panther', userAvatar: 'https://randomuser.me/api/portraits/men/29.jpg', project: 'Admin Dashboard', address: 'Wakanda', date: '17 weeks ago', status: 'Complete' }]


    const handlePageChange = (event, page) => {
        setCurrentPage(page);
        gridApi.paginationGoToPage(page - 1);
    };

    const totalPages = Math.ceil(rowData.length / pageSize);

    // Custom CSS for dark mode
    const gridTheme = isDarkTheme ? 'ag-theme-material-dark' : 'ag-theme-material';
    const customGridStyles = `
        .ag-theme-material-dark {
            --ag-background-color: #1e1e1e;
            --ag-header-background-color: #2a2a2a;
            --ag-odd-row-background-color: #262626;
            --ag-header-foreground-color: #ffffff;
            --ag-foreground-color: #ffffff;
            --ag-secondary-foreground-color: #ffffff;
            --ag-row-hover-color: #3a3a3a;
            --ag-selected-row-background-color: #3a3a3a;
            --ag-row-border-color: #3a3a3a;
            --ag-cell-horizontal-border: #3a3a3a;
            --ag-input-focus-border-color: #4a4a4a;
        }
        .ag-theme-material-dark .ag-root-wrapper {
            border: 1px solid #3a3a3a;
        }
    `

    return (
        <Box sx={{ height: '100%', width: '100%', bgcolor: isDarkTheme ? '#141212' : '#ffffff', padding: '20px' }}>
            <Typography style={{ fontSize: '20px', fontWeight: 'bold', margin: 'auto', paddingBottom: '10px' }}>Order List</Typography>
            <style>{customGridStyles}</style>
            <Box
                sx={{
                    p: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: isDarkTheme ? '#1e1e1e' : '#f5f5f5',  // Background color based on theme
                    borderRadius: '8px',                       // Apply border radius to the entire container
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',  // Optional: adds a subtle shadow
                }}
            >
                <Box>
                    <IconButton size="small" sx={{ mr: 1, color: isDarkTheme ? '#ffffff' : 'inherit' }}>
                        <Add />
                    </IconButton>
                    <IconButton size="small" sx={{ mr: 1, color: isDarkTheme ? '#ffffff' : 'inherit' }}>
                        <FilterList />
                    </IconButton>
                    <IconButton size="small" sx={{ color: isDarkTheme ? '#ffffff' : 'inherit' }}>
                        <SwapVert />
                    </IconButton>
                </Box>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    InputProps={{
                        sx: {
                            bgcolor: isDarkTheme ? '#333' : '#f5f5f5',  // Background for the TextField
                            borderRadius: '4px',                        // Border radius for the input field
                            color: isDarkTheme ? '#ffffff' : 'inherit',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: isDarkTheme ? '#4a4a4a' : 'rgba(0, 0, 0, 0.23)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: isDarkTheme ? '#6a6a6a' : 'rgba(0, 0, 0, 0.23)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: isDarkTheme ? '#8a8a8a' : 'rgba(0, 0, 0, 0.23)',
                            },
                        }
                    }}
                />
            </Box>

            <div
                className={gridTheme}
                style={{
                    height: 'calc(100% - 64px)',
                    width: '100%',
                    marginTop: "20px"
                }}

            >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={pageSize}
                    suppressMenuHide={true}
                    suppressRowClickSelection={true}
                    domLayout='autoHeight'
                    rowHeight={55}
                    onGridReady={onGridReady}
                    rowSelection="multiple"
                    suppressMovableColumns
                    overlayNoRowsTemplate={'<span aria-live="polite" aria-atomic="true"><div class="no_data_found"><div><img src="https://ik.imagekit.io/unizap/ndh/ndh-assets/img/no_order.svg" alt="No data Yet" /></div><h4>No Order Found!</h4></div></span>'}
                />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'right', p: 2 }}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: isDarkTheme ? '#ffffff' : '#2F4F4F',
                        },
                        '& .Mui-selected': {
                            backgroundColor: isDarkTheme ? '#4a4a4a' : '#2F4F4F',
                            color: '#ffffff',
                        },
                        '& .MuiPaginationItem-ellipsis': {
                            color: isDarkTheme ? '#ffffff' : '#2F4F4F',
                        },
                    }}
                    variant="outlined"
                    shape="rounded"
                />
            </Box>
        </Box>
    );
};

export default Order;