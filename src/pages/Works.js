import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Works() {
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
          background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
          padding: '5vh',
          margin: '20px',
          borderRadius: '20px',
          textAlign: 'center',
        }}
      >
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" style={{ color: 'white' }} id="works">
              Works Page
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Works;
