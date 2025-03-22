import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <AppBar position="sticky" sx={{ 
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 600,
            background: 'linear-gradient(90deg, #87A878, #A3B899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Alexis Bader
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              mx: 1,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #87A878, #A3B899)',
                transition: 'width 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
              },
              '&.active': {
                color: '#87A878',
                '&::after': {
                  width: '100%',
                },
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/projects"
            sx={{
              mx: 1,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #87A878, #A3B899)',
                transition: 'width 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
              },
              '&.active': {
                color: '#87A878',
                '&::after': {
                  width: '100%',
                },
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/experience"
            sx={{
              mx: 1,
              position: 'relative',
              '&:hover': {
                backgroundColor: 'transparent',
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #87A878, #A3B899)',
                transition: 'width 0.3s ease-in-out',
              },
              '&:hover::after': {
                width: '100%',
              },
              '&.active': {
                color: '#87A878',
                '&::after': {
                  width: '100%',
                },
              },
            }}
          >
            Experience
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation; 