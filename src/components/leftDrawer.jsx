import React, { useState } from 'react';
import { Avatar, Collapse, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Dashboard as DashboardIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import AvTimerOutlinedIcon from '@mui/icons-material/AvTimerOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Person3Icon from '@mui/icons-material/Person3';
import GroupIcon from '@mui/icons-material/Group';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const LeftDrawer = () => {
    const [openDashboard, setOpenDashboard] = useState(true);
    const [openECommerce, setOpenECommerce] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openCourses, setOpenCourses] = useState(false);
    const [profile, setOpenProfile] = useState(false);

    const handleProfile = () => {
        setOpenProfile((prevOpen) => !prevOpen);
    };

    const handleECommerceClick = () => {
        setOpenECommerce(!openECommerce);
    };

    const handleProjectsClick = () => {
        setOpenProjects(!openProjects);
    };

    const handleCoursesClick = () => {
        setOpenCourses(!openCourses);
    };

    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 200,
                flexShrink: 0,
                height: '100%', // Set the height to 100%
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    height: '100%', // Ensure the paper's height is set
                    overflowY: 'auto', // Allow vertical scrolling
                },
            }}
        >
            <List>
                <ListItem sx={{ paddingY: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar sx={{ width: '30px', height: '30px' }} src="https://logo.clearbit.com/juspay.in" />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px' }} variant="h6">ByeWind</Typography>
                    </div>
                </ListItem>

                <ListItem sx={{ paddingY: 1 }}>
                    <Typography style={{ fontSize: '15px', fontWeight: '200', color: grey[500] }} variant="h6">Favourites <span style={{ marginLeft: '20px', color: grey[200] }}>Recently</span></Typography>
                </ListItem>
                <ListItem >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FiberManualRecordIcon sx={{ fontSize: 10, color: grey[500] }} />
                        <Typography style={{ fontSize: '15px', fontWeight: '200', marginLeft: '10px' }} variant="h6">Overview</Typography>
                    </div>
                </ListItem>
                <ListItem >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FiberManualRecordIcon sx={{ fontSize: 10, color: grey[500] }} />
                        <Typography style={{ fontSize: '15px', fontWeight: '200', marginLeft: '10px' }} variant="h6">Projects</Typography>
                    </div>
                </ListItem>

                <ListItem sx={{ paddingY: 1 }}>
                    <ListItemText primary="Dashboards" style={{ color: grey[500] }} />
                </ListItem>
                <ListItem >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AvTimerOutlinedIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Default</Typography>
                    </div>
                </ListItem>
                <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <ShoppingCartOutlinedIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">eCommerce</Typography>
                    </div>
                </ListItem>
                <ListItem >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <BookmarkAddedOutlinedIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Projects</Typography>
                    </div>
                </ListItem>
                <ListItem >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <ImportContactsOutlinedIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Online Courses</Typography>
                    </div>
                </ListItem>
                <ListItem sx={{ paddingY: 1 }}>
                    <ListItemText primary="Pages" style={{ color: grey[500] }} />
                </ListItem>
                <ListItem onClick={handleProfile}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {profile ? <ExpandLess sx={{ fontSize: 20, color: 'grey' }} /> : <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />}
                        <Person3Icon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">User Profile</Typography>
                    </div>
                </ListItem>
                <Collapse in={profile} timeout="auto" unmountOnExit>
                    <div style={{ paddingLeft: '50px' }}> {/* Add padding to indent from the parent */}
                        <div style={{ marginBottom: '8px' }}> {/* Add margin for space between items */}
                            <Typography style={{ fontSize: 15 }} variant="h6">
                                Overview
                            </Typography>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <Typography style={{ fontSize: 15 }} variant="h6">
                                Projects
                            </Typography>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <Typography style={{ fontSize: 15 }} variant="h6">
                                Campaigns
                            </Typography>
                        </div>
                        <div style={{ marginBottom: '8px' }}>
                            <Typography style={{ fontSize: 15 }} variant="h6">
                                Followers
                            </Typography>
                        </div>
                    </div>
                </Collapse>

                <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <GroupIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Account</Typography>
                    </div>
                </ListItem>
                <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <ContactPageIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Corporate</Typography>
                    </div>
                </ListItem>
                <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <BookIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Blog</Typography>
                    </div>
                </ListItem>
                <ListItem>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <ExpandMore sx={{ fontSize: 20, color: 'grey' }} />
                        <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
                        <Typography style={{ fontSize: '15px', marginLeft: '5px', fontWeight: '200' }} variant="h6">Social</Typography>
                    </div>
                </ListItem>

            </List>
        </Drawer>
    );
};

export default LeftDrawer;
