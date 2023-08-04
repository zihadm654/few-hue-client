import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import UseFirebase from '../hooks/UseFirebase';
import { Link, Outlet } from 'react-router-dom';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { user, logOut } = UseFirebase();
    console.log(user)
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar style={{
                fontWeight: '700', textAlign: 'center', backgroundColor: '#595DEA'
            }}>
                <Typography variant='h4' style={{ fontWeight: '700', color: '#fff' }}>
                    Feu-Hue
                </Typography>
            </Toolbar>

            <Divider />
            <Box>

                <Divider />
                <List style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ color: 'gray' }} to="/dashboard">Dashboard</Link>
                </List>
                <Divider />
                <List style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ color: 'gray' }} to="/dashboard/add-products">Add-Product</Link>
                </List>
                <Divider />
                <List style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ color: 'gray' }} to="/dashboard/order-list">Order-List</Link>
                </List>
                <Divider />
                <List style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link style={{ color: 'gray' }} to="/dashboard/payment">Payment</Link>
                </List>
                <Divider />
                {user?.email && <List style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" color="error" onClick={logOut}>Log Out</Button>
                </List>
                }
            </Box>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                style={{ backgroundColor: '#595DEA' }}
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography style={{ fontWeight: '700' }} variant="h4" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Feu-Hue Admin Pannel
                    </Typography>
                    <IconButton
                     size='large'
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    >          
                     <Avatar src={user.photoURL} alt=""/>           
                     </IconButton>
                    <Typography variant='h5'>
                    {user.displayName}
                    </Typography>             
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box style={{ backgroundColor: 'whitesmoke', minHeight: '100vh' }}
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box >
        </Box >
    );
};

export default Dashboard;