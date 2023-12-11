import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '5vh',
          margin: '20px',
          borderRadius: '20px',
          textAlign: 'center',
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" style={{ color: 'white' }} id="about">
              About Page
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default About;
