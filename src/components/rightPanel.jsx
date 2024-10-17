// // components/RightPanel.js
// import React from 'react';
// import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

// const RightPanel = () => {
//     return (
//         <Box
//             sx={{
//                 width: 300,
//                 bgcolor: 'background.paper',
//                 p: 2,
//             }}
//         >
//             <Typography variant="h6">Notifications</Typography>
//             <List>
//                 <ListItem>
//                     <ListItemText primary="New user signup" secondary="59 minutes ago" />
//                 </ListItem>
//                 <ListItem>
//                     <ListItemText primary="Order placed" secondary="12 hours ago" />
//                 </ListItem>
//             </List>
//         </Box>
//     );
// };

// export default RightPanel;
import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider, Container } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import PersonIcon from '@mui/icons-material/Person';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const notifications = [
    { icon: <BugReportIcon />, message: 'You have a bug that needs...', time: 'Just now', bgcolor: '#CCFFCC ' },
    { icon: <PersonIcon />, message: 'New user registered', time: '59 minutes ago', bgcolor: '#D4EDDA' },
    { icon: <BugReportIcon />, message: 'You have a bug that needs...', time: '12 hours ago', bgcolor: '#CCFFCC ' },
    { icon: <VolumeUpIcon />, message: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', bgcolor: '#D4EDDA' },
];

const activities = [
    { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', message: 'You have a bug that needs...', time: 'Just now' },
    { avatar: 'https://randomuser.me/api/portraits/women/2.jpg', message: 'Released a new version', time: '59 minutes ago' },
    { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', message: 'Submitted a bug', time: '12 hours ago' },
    { avatar: 'https://randomuser.me/api/portraits/women/4.jpg', message: 'Modified A data in Page X', time: 'Today, 11:59 AM' },
    { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', message: 'Commented on your issue', time: 'Yesterday, 6:45 PM' },
    { avatar: 'https://randomuser.me/api/portraits/women/6.jpg', message: 'Assigned a new task', time: '2 days ago' },
];



const people = [
    { avatar: 'https://randomuser.me/api/portraits/men/11.jpg', name: 'Benjamin Carter' },
    { avatar: 'https://randomuser.me/api/portraits/women/12.jpg', name: 'Ava Thompson' },
    { avatar: 'https://randomuser.me/api/portraits/men/13.jpg', name: 'Liam Robinson' },
    { avatar: 'https://randomuser.me/api/portraits/women/14.jpg', name: 'Charlotte Walker' },
    { avatar: 'https://randomuser.me/api/portraits/men/17.jpg', name: 'William Hernandez' },
    { avatar: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Isabella King' },
    { avatar: 'https://randomuser.me/api/portraits/men/19.jpg', name: 'James Scott' },
    { avatar: 'https://randomuser.me/api/portraits/women/20.jpg', name: 'Sophia Perez' },
    { avatar: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Noah Martinez' },
    { avatar: 'https://randomuser.me/api/portraits/women/16.jpg', name: 'Amelia Lewis' },
];


const NotificationItem = ({ icon, message, time, bgcolor }) => (
    <ListItem>
        <ListItemIcon sx={{ minWidth: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ bgcolor: bgcolor, borderRadius: '50%', width: '24px', height: '24px' }}>
                {icon}
            </Box>
        </ListItemIcon>
        <ListItemText
            primary={
                <Typography sx={{ fontSize: '11px' }}>
                    {message}
                </Typography>
            }
            secondary={
                <Typography sx={{ fontSize: '10px' }}>
                    {time}
                </Typography>
            }
        />
    </ListItem>
);


const ActivityItem = ({ avatar, message, time }) => (
    <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
            <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
        </ListItemIcon>
        <ListItemText
            primary={
                <Typography sx={{ fontSize: '11px' }}>
                    {message}
                </Typography>
            }
            secondary={
                <Typography sx={{ fontSize: '10px' }}>
                    {time}
                </Typography>
            }
        />
    </ListItem>
);

const People = ({ avatar, name }) => (
    <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
            <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
        </ListItemIcon>
        <ListItemText
            primary={
                <Typography sx={{ fontSize: '11px' }}>
                    {name}
                </Typography>
            }
        />
    </ListItem>
);

export default function RightPanel() {
    return (
        <Container maxWidth={false} disableGutters>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', boxShadow: 1, overflow: 'hidden' }}>
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '16px' }}>Notifications</Typography>
                    <List disablePadding>
                        {notifications.map((item, index) => (
                            <NotificationItem key={index} {...item} />
                        ))}
                    </List>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '16px' }}>Activities</Typography>
                    <List disablePadding>
                        {activities.map((item, index) => (
                            <ActivityItem key={index} {...item} />
                        ))}
                    </List>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', fontSize: '16px' }}>Contacts</Typography>
                    <List disablePadding>
                        {people.map((item, index) => (
                            <People key={index} {...item} />
                        ))}
                    </List>
                </Box>

            </Box>
        </Container>
    );
}