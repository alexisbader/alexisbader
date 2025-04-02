import React from 'react';
import { Container, Typography, Box, Paper, Grid, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';

const Experience = () => {
  const experiences = [
    {
      company: 'RWTH Aachen University - Institute of Medical Informatics',
      position: 'Virtual Reality Research Intern',
      period: 'May 2024 - August 2024',
      location: 'Aachen, Germany',
      description: 'Developed a VR application for oncology patients using Unity, Django, and PostgreSQL on Meta Quest, integrating survey data collection for usability studies and improving patient comfort during chemotherapy. First authored a comparative study through developing a Unity application for five mixed reality headsets which analyzed their performance in surgical applications to determine the optimal VR surgical device and inform department fund allocation.',
      technologies: ['Unity', 'Django', 'PostgreSQL', 'Meta Quest', 'VR Development'],
    },
    {
      company: 'ReBlink',
      position: 'Software Engineering Intern',
      period: 'September 2023 - April 2024',
      location: 'Toronto, Canada',
      description: 'Engineered and optimized a Large Language Model (GPT-3.5) for a dynamic game AI, tailoring responses to individual player skill levels and ensuring a unique, engaging experience throughout game play. Led the design and execution of pregame lobby scenes using Figma and Unity, directly contributing to the final production version of a Web3 game, boosting user engagement and pre-launch interest. Improved the user authentication process by developing and updating Laravel endpoints, ensuring seamless integration between the back-end and front-end components.',
      technologies: ['GPT-3.5', 'Unity', 'Figma', 'Laravel', 'Web3'],
    },
    {
      company: 'Okos Smart Homes Inc.',
      position: 'Software Developer Intern',
      period: 'January 2023 - April 2023',
      location: 'Calgary, Canada',
      description: 'Developed complex, scalable React components for iOS and Android app using React-Native and Expo, dramatically improving app performance to meet production standards and release to stores. Created REST API endpoints using Flask and Axios, implementing PostgreSQL for data storage and optimizing schema design to improve data fetching speed by 325%. Led a successful UI/UX redesign of mobile and web applications, drafting high fidelity prototypes using Figma, creating tickets, and leading the implementation of changes.',
      technologies: ['React Native', 'Expo', 'Flask', 'PostgreSQL', 'Figma'],
    },
    {
      company: 'Veriday Inc.',
      position: 'Software Developer Intern',
      period: 'May 2022 - September 2022',
      location: 'Mississauga, Canada',
      description: 'Built a reporting tool microservice to automate the processing of sensitive financial data using the MERN stack, directly saving over $40,000 per year in reduced expenses. Developed highly customizable website templates for financial advisors, on-boarding 200+ clients and achieving a 50% decrease in advisor issues at launch.',
      technologies: ['MERN Stack', 'Microservices', 'Financial Software'],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{
          mb: 6,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            background: 'linear-gradient(90deg, #87A878, #A3B899)',
            borderRadius: '2px',
          },
        }}
      >
        Work Experience
      </Typography>
      <Box sx={{ mt: 4 }}>
        {experiences.map((experience, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 4,
              mb: 4,
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(135, 168, 120, 0.1)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 30px rgba(135, 168, 120, 0.1)',
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(to bottom, #87A878, #A3B899)',
                borderRadius: '2px',
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BusinessIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="h5" component="h3" gutterBottom>
                      {experience.company}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WorkIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="subtitle1" color="text.secondary">
                      {experience.position}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarTodayIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body2" color="text.secondary">
                      {experience.period}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 3 }}>
                    {experience.location}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box sx={{ mb: 3 }}>
                  {experience.description
                    .replace(/(\d+)\.(\d+)/g, '$1$2')
                    .split('.')
                    .map((bullet, bulletIndex) => (
                      bullet.trim() && (
                        <Box key={bulletIndex} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                          <Typography 
                            component="span" 
                            sx={{ 
                              color: 'primary.main',
                              mr: 1,
                              mt: 0.5,
                              fontSize: '0.8rem'
                            }}
                          >
                            •
                          </Typography>
                          <Typography component="span">
                            {bullet.trim().replace(/(\d+)(\d+)/g, '$1.$2')}
                          </Typography>
                        </Box>
                      )
                    ))}
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {experience.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(135, 168, 120, 0.1)',
                        color: 'primary.main',
                        border: '1px solid rgba(135, 168, 120, 0.2)',
                        '&:hover': {
                          backgroundColor: 'rgba(135, 168, 120, 0.15)',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default Experience; 