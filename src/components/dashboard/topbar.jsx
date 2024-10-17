import { IconButton, TextField, Box, Divider, Typography } from '@mui/material';
import { Search, Notifications, Settings } from '@mui/icons-material';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import { grey } from '@mui/material/colors';

const TopBar = ({ toggleTheme, darkMode }) => {
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <StarBorderPurple500OutlinedIcon sx={{ fontSize: 10, color: grey[200] }} />
                        <StarBorderPurple500OutlinedIcon sx={{ fontSize: 10, color: grey[200] }} />
                        <Typography style={{ fontSize: '15px', fontWeight: '200', color: grey[200] }} variant="h6">Dashboards</Typography>
                        <span>/</span>
                        <Typography style={{ fontSize: '15px', fontWeight: '200', color: 'black' }} variant="h6">Default</Typography>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Search"
                                InputProps={{ sx: { borderRadius: '20px', padding: '2px 10px' } }}
                            />

                            <IconButton>
                                <Search />
                            </IconButton>
                            <IconButton>
                                <Notifications />
                            </IconButton>
                            <IconButton onClick={toggleTheme}>
                                <Settings />
                            </IconButton>
                        </Box>

                    </div>

                </div>



            </Box>
            <Divider />
        </>
    );
}


export default TopBar
