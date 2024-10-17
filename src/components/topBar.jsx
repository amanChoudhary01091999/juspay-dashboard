// components/TopBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarIcon from '@mui/icons-material/Star';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { grey } from '@mui/material/colors';
import { Search } from '@mui/icons-material';

const TopBar = ({ toggleTheme, darkMode }) => {
    return (
        <AppBar position="static" elevation={0} color="background.paper" >
            <Toolbar sx={{ maxHeight: "10px" }}>
                <StarIcon sx={{ fontSize: 20, marginRight: '20px' }} />
                <AnnouncementIcon sx={{ fontSize: 20, marginRight: '20px' }} />
                <Typography variant="h6" sx={{ flexGrow: 1, color: grey[400], fontSize: "15px" }}>
                    Dashboards / <span style={{ color: 'black' }}>Default</span>
                </Typography>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    InputProps={{
                        sx: { borderRadius: '5px', width: '200px', height: '30px', padding: '2px 10px', fontSize: "15px" },
                        startAdornment: (
                            <InputAdornment position="start">
                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
                <IconButton>
                    <SearchIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton>
                    <NotificationsIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton onClick={toggleTheme}>
                    {darkMode ? <LightModeIcon sx={{ fontSize: 20 }} /> : <DarkModeIcon sx={{ fontSize: 20 }} />}
                </IconButton>
            </Toolbar>
        </AppBar >
    );
};

export default TopBar;

