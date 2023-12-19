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
    <div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%"}}
        exit={{ x: window.innerWidth, transition: {duration: 0.1}}}
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
                padding: '1vh',
                margin: '20px',
                borderRadius: '20px',
                textAlign: 'center',
              }}
            >
              <Grid container justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="h2" style={{ color: 'white' }} id="about">
                      About me<br />
                      <Typography style={{ color: 'white' , fontSize: '1rem'}}>
                        Greetings, I am <a style={{color: 'yellow', fontSize: '1.3rem'}}>Carlito Ong Tingson Jr.</a>, a recent <a style={{color: 'yellow', fontSize: '1.3rem'}}>Computer Science</a> graduate from the University of St. La Salle Bacolod, Philippines. With a solid foundation in my field, I honed my skills as a <a style={{color: 'yellow', fontSize: '1.3rem'}}>Junior Web Developer</a> during an internship at ITS - University of St. La Salle. <br/> <br/>
                        I bring a dynamic skill set, commitment to excellence, and a passion for leveraging technology to address complex challenges. Eager to contribute to innovative projects, I am ready to make a positive impact in the ever-evolving field of computer science.🚀 <br/>
                        <br/>Hobbies: <br/><a style={{color: 'yellow', fontSize: '1.2rem'}}>Gaming <br/>Watching Films <br/> Travelling</a>
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </motion.div>
    </div>
  );
}

export default About;
