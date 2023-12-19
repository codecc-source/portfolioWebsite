import * as React from 'react';
import '../App.css';
import { Box, Grid, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactTyped from 'react-typed';
import { motion } from 'framer-motion';

function HomeDefault() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });
  
  return (
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
                <Typography variant="h2" style={{ color: 'white' }} id="homedefault">
                  Welcome to my portfolio website!<br />
                  <Typography variant="h5" style={{ color: 'white', display: 'inline-block' }}>
                    I create software for: {' '} <br/>
                    <ReactTyped style={{color: 'yellow', fontSize: '1.8rem'}} strings={["Frontend Web Dev", "Unity Game Engine", "Arduino Projects", "Python Projects"]} typeSpeed={20} loop backSpeed={10} showCursor={true}/> <br/><br/>
                  </Typography>
                </Typography>

                <Typography>
                  <Typography variant="h5" style={{ color: 'white', display: 'inline-block' }}>
                      Languages: {' '} <br/>
                      <ReactTyped style={{color: 'yellow', fontSize: '1.8rem'}} 
                      strings={[
                        "React JS <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='React' style='width: 25px; height: 25px;'/><img src={process.env.PUBLIC_URL + '/images/js.png'} alt='JS' style='width: 25px; height: 25px;'/>",
                        "CSS <img src={process.env.PUBLIC_URL + '/images/css.png'} alt='CSS' style='width: 25px; height: 25px;'/>",
                        "HTML <img src={process.env.PUBLIC_URL + '/images/html.png'} alt='HTML' style='width: 25px; height: 25px;'/>",
                        "PHP<img src={process.env.PUBLIC_URL + '/images/php.png'} alt='PHP' style='width: 25px; height: 25px;'/>",
                        "Python <img src={process.env.PUBLIC_URL + '/images/python.png'} alt='Python' style='width: 25px; height: 25px;'/>",
                        "Unity C# <img src={process.env.PUBLIC_URL + '/images/unity.png'} alt='Unity' style='width: 25px; height: 25px;'/> <img src={process.env.PUBLIC_URL + '/images/csharp.png'} alt='C#' style='width: 25px; height: 25px;'/>",
                        "C++ <img src={process.env.PUBLIC_URL + '/images/cpp.png'} alt='C++' style='width: 25px; height: 25px;'/>",
                        "Java <img src={process.env.PUBLIC_URL + '/images/java.png'} alt='Java' style='width: 25px; height: 25px;'/>",
                      ]} 
                      typeSpeed={70} loop />
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

export default HomeDefault;
