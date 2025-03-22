import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'BCI Game: WATOLINK',
      description: 'Successfully recruited and co-led a team of 10 students in the development of a Brain Computer Interface (BCI) video game. Selected as a finalist in the IEEE GameSig competition. Spearheaded the integration of a sophisticated algorithm designed to analyze EEG signals, enabling the game to detect intentional blinking as a control mechanism.',
      image: '/images/watolink.jpg',
      technologies: ['C#', 'Python', 'Unity', 'Figma'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Undergraduate Research: Vision and Image Processing Lab',
      description: 'Utilized the EgoExo4D dataset to collect eye position and ball coordinates with OpenCV during basketball throws. Created a predictive machine learning model using a Feedforward Neural Network to determine player expertise level based on absolute and relative gaze position during free throws.',
      image: '/images/vision-research.jpg',
      technologies: ['Python', 'PyTorch', 'OpenCV'],
      github: '#',
      demo: '#',
    },
    {
      title: 'EmotionBCI',
      description: 'Collected a large data set of labelled EEG readings during simulated emotional states to train various classification models (KNN, logistic regression, Naive Bayes Classification, SVM, and ANN). Achieved an accuracy of 96 percent on predicting high or low valance emotion states, the second highest accuracy achieved in relevant literature.',
      image: '/images/emotion-bci.jpg',
      technologies: ['Python', 'NumPy', 'PyTorch', 'Matplotlib'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Project 1',
      description: 'Description of your first project. Explain what technologies you used and what problem it solves.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'Node.js', 'TypeScript'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['JavaScript', 'Python', 'SQL'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Project 3',
      description: 'Description of your third project. Share the challenges you faced and how you overcame them.',
      image: 'https://via.placeholder.com/300x200',
      technologies: ['React', 'Firebase', 'Tailwind'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
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
        My Projects
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(135, 168, 120, 0.15)',
                  '& .MuiCardMedia-root': {
                    transform: 'scale(1.05)',
                  },
                  '& .project-overlay': {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    transition: 'transform 0.5s ease-in-out',
                  }}
                />
                <Box
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(135, 168, 120, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 2,
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <IconButton 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                      backgroundColor: 'white',
                      '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.9)' }
                    }}
                  >
                    <LaunchIcon />
                  </IconButton>
                </Box>
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="h2"
                  sx={{ 
                    fontWeight: 600,
                    color: 'secondary.main',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    color: 'text.secondary',
                    mb: 2,
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.technologies.map((tech, techIndex) => (
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 