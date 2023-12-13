import * as React from 'react';
import '../App.css';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

function About() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <ThemeProvider theme={theme}>
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
                  <Typography variant="h2" style={{ color: 'white' }} id="homedefault">
                    About me<br />
                    <Typography variant="h5" style={{ color: 'white' }}>
                      Greetings, I am <a style={{color: 'yellow'}}>Carlito Ong Tingson Jr.</a>, a recent <a style={{color: 'yellow'}}>Computer Science</a> graduate from the University of St. La Salle Bacolod, Philippines. With a solid foundation in my field, I honed my skills as a <a style={{color: 'yellow'}}>Junior Web Developer</a> during an internship at ITS - University of St. La Salle. <br/> <br/>
                      I bring a dynamic skill set, commitment to excellence, and a passion for leveraging technology to address complex challenges. Eager to contribute to innovative projects, I am ready to make a positive impact in the ever-evolving field of computer science.🚀 <br/>
                      <br/>Hobbies: <br/>Gaming <br/>Watching Films <br/> Travelling
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </motion.div>
  );
}

export default About;
