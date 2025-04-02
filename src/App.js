import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

const theme = createTheme({
  palette: {
    primary: {
      main: '#87A878', // Sage green
      light: '#A3B899',
      dark: '#6B8E4E',
    },
    secondary: {
      main: '#222222', // Dark gray
      light: '#717171',
      dark: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F7F7F7',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #87A878 0%, #A3B899 100%)',
      secondary: 'linear-gradient(135deg, #222222 0%, #717171 100%)',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      background: 'linear-gradient(135deg, #87A878 0%, #A3B899 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      borderRadius: '8px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '14px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          boxShadow: 'none',
          background: 'linear-gradient(135deg, #87A878 0%, #A3B899 100%)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(135, 168, 120, 0.3)',
            background: 'linear-gradient(135deg, #A3B899 0%, #87A878 100%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          color: '#222222',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.08)',
          borderBottom: '1px solid #EBEBEB',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
