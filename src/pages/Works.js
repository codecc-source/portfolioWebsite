import * as React from 'react';
import '../App.css';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

function Works() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '70vh',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: 'center', padding: '0 16px' }}>
                <Typography variant="h3" style={{ color: 'yellow' }} id="works">
                  Works Page WIP
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h5" style={{ color: 'white' }}>
                  Super Barangay Cleaners: <br />A Third Person Shooter Game <br />Using Procedural Content Generation Algorithm
                </Typography>
                <img
                  src={process.env.PUBLIC_URL + '/images/thesis.png'}
                  alt="Thesis"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ color: 'white' }}>
                  Reviewer App Python
                </Typography>
                <img
                  src={process.env.PUBLIC_URL + '/images/reviewerApp.png'}
                  alt="Reviewer App"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="center">
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Typography variant="h4" style={{ color: 'white' }}>
                  Quiz Master Android Studio
                </Typography>
                <img
                  src={process.env.PUBLIC_URL + '/images/quizMaster.png'}
                  alt="Quiz Master"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </motion.div>
  );
}

export default Works;
