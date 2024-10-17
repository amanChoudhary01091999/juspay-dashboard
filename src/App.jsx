// App.js
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Divider } from '@mui/material';
import LeftDrawer from './components/leftDrawer';
import Dashboard from './components/dashboard';
import RightPanel from './components/rightPanel';
import TopBar from './components/topBar';
import Order from './components/orders/main';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: 'white', paper: '#fff' },
    text: { primary: '#000' },
  },
  typography: { fontFamily: '"Roboto", sans-serif' },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: 'black', paper: 'black' },
    text: { primary: '#fff' },
  },
  typography: { fontFamily: '"Roboto", sans-serif' },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',  // Set card background color to black
          color: '#fff',             // Ensure text is white for readability
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',  // Set grid background color to black
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',  // Set box background color to black
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'black',  // Set container background color to black
        },
      },
    },
  },
});


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const location = useLocation();

  const isOrdersRoute = location.pathname === '/orders';

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '20%' }}>
          <LeftDrawer />
        </Box>
        <Box component="main" sx={{ flexGrow: 1, width: isOrdersRoute ? '80%' : '60%' }}>
          <TopBar toggleTheme={toggleTheme} darkMode={darkMode} />
          <Divider />
          <div style={{ marginTop: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard mode={darkMode} />} />
              <Route path="/dashboard" element={<Dashboard mode={darkMode} />} />
              <Route path="/orders" element={<Order mode={darkMode} />} />
            </Routes>
          </div>
        </Box>
        {!isOrdersRoute && (
          <Box sx={{ width: '20%' }}>
            <RightPanel />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
