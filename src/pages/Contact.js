import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Contact() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

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
        <ThemeProvider theme={theme}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4" style={{ color: 'white' }} id="contact">
                Contact me through:
              </Typography>

              <Typography component="div" id="emailLink" sx={{ textAlign: 'center', mt: 2 }}>
                <img
                  src={process.env.PUBLIC_URL + '/images/email.png'}
                  style={{ width: '50px', height: '50px' }}
                  alt="Logo"
                />
                <a style={{ fontSize: '1.5rem', display: 'block', color: 'white' }}> email@gmail.com</a>
              </Typography>

              <Typography component="div" id="linkedIn" sx={{ textAlign: 'center', mt: 2 }}>
                <img
                  src={process.env.PUBLIC_URL + '/images/linked.png'}
                  style={{ width: '50px', height: '50px' }}
                  alt="Logo"
                />
                <a style={{ fontSize: '2rem', display: 'block' }} href="https://www.linkedin.com/in/carlito-jr-tingson-a00300275">
                  LinkedIn
                </a>
              </Typography>

              <Typography component="div" id="githubLink" sx={{ textAlign: 'center', mt: 2 }}>
                <img
                  src={process.env.PUBLIC_URL + '/images/github.png'}
                  style={{ width: '50px', height: '50px' }}
                  alt="Logo"
                />
                <a style={{ fontSize: '2rem', display: 'block' }} href="https://github.com/codecc-source">
                  GitHub
                </a>
              </Typography>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default Contact;
