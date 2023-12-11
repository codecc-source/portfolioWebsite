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
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
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
                Contact Page 

                <Box id={"emailLink"} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/email.png'}
                    style={{ width: '50px', height: '50px' }}
                    alt="Logo"
                  />
                  <a style={{fontSize: '1.5rem'}}> email@gmail.com</a>
                </Box>

                <Box id={"linkedIn"} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/linked.png'}
                    style={{ width: '50px', height: '50px' }}
                    alt="Logo"
                  />
                  <a style={{ fontSize: '2rem' }} href='https://www.linkedin.com/in/carlito-jr-tingson-a00300275'>
                    linkedIn
                  </a>
                </Box>

                <Box id={"githubLink"} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
                  <img
                    src={process.env.PUBLIC_URL + '/images/github.png'}
                    style={{ width: '50px', height: '50px' }}
                    alt="Logo"
                  />
                  <a style={{ fontSize: '2rem' }} href='https://github.com/codecc-source'>
                    github
                  </a>
                </Box>
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
      </Box>
    </Box>
  );
}

export default Contact;
