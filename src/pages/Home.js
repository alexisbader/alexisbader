import React from 'react';
import { Box, Typography, Container, Button, Grid, Avatar, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(247, 247, 247, 0.9) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 20%, rgba(135, 168, 120, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(135, 168, 120, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            py: 8,
          }}
        >
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  textAlign: { xs: 'center', md: 'left' },
                  animation: 'fadeInLeft 1s ease-out',
                  '@keyframes fadeInLeft': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(-20px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    position: 'relative',
                    animation: 'slideUpFade 1s ease-out',
                    mb: 4,
                    '@keyframes slideUpFade': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(20px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: 0,
                      width: '60px',
                      height: '4px',
                      background: 'linear-gradient(90deg, #87A878, #A3B899)',
                      borderRadius: '2px',
                    },
                  }}
                >
                  Hey! I'm Alexis
                </Typography>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  sx={{
                    color: 'secondary.light',
                    fontWeight: 500,
                    mb: 3,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Biomedical Engineering Student & Developer
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    maxWidth: '600px',
                    mb: 6,
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  I'm passionate about combining healthcare innovation with software development. Currently exploring the intersection of Brain-Computer Interfaces, Virtual Reality, and medical applications. My research and projects focus on creating technology that enhances human-computer interaction.
                </Typography>
                <Box sx={{ mt: 0 }}>
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    sx={{ 
                      mr: 2,
                      '&:hover': {
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    component={Link}
                    to="/experience"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderWidth: '2px',
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        borderColor: 'primary.dark',
                        backgroundColor: 'rgba(135, 168, 120, 0.04)',
                      },
                    }}
                  >
                    Work Experience
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mt: { xs: 4, md: 0 },
                  animation: 'fadeInRight 1s ease-out',
                  '@keyframes fadeInRight': {
                    '0%': {
                      opacity: 0,
                      transform: 'translateX(20px)',
                    },
                    '100%': {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/UROP Symposium 2024_Claudia Pankanin (141) (1).JPG"
                    alt="Alexis Bader presenting research at RWTH Aachen"
                    sx={{
                      width: { xs: 280, md: 350 },
                      height: { xs: 350, md: 440 },
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
                      borderRadius: '50%',
                      border: '4px solid',
                      borderColor: 'primary.main',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        borderColor: 'primary.light',
                      },
                    }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 