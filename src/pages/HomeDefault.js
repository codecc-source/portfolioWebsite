import React, { useState } from 'react';
import '../App.css';
import { Box, Grid, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactTyped from 'react-typed';
import { motion } from 'framer-motion';

function HomeDefault() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

  const todoList = ["Create basic layout", "Change background to TSParticles", "Change navigation bar", "Fix navigation bar", "Add pages and content","Utilize some other libraries", "Add 'the image'", "Add to do list", "Add some sort of backend to project", "Link python note app", "Add weather app"];
  const completedList = [0,1,2,3,4,5,6,7];

  const [visibleProject, setVisibleProject] = useState(null);

  const toggleProjectVisibility = (projectId) => {
    setVisibleProject(visibleProject === projectId ? null : projectId);
  };

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
                        "React JS <img src='/portfoliowebsite/images/react.png' alt='React' style='width: 25px; height: 25px;'/><img src='/portfoliowebsite/images/js.png' alt='JS' style='width: 25px; height: 25px;'/>",
                        "CSS <img src='/portfoliowebsite/images/css.png' alt='CSS' style='width: 25px; height: 25px;'/>",
                        "HTML <img src='/portfoliowebsite/images/html.png' alt='HTML' style='width: 25px; height: 25px;'/>",
                        "PHP<img src='/portfoliowebsite/images/php.png' alt='PHP' style='width: 25px; height: 25px;'/>",
                        "Python <img src='/portfoliowebsite/images/python.png' alt='Python' style='width: 25px; height: 25px;'/>",
                        "Unity C# <img src='/portfoliowebsite/images/unity.png' alt='Unity' style='width: 25px; height: 25px;'/> <img src='/portfoliowebsite/images/csharp.png' alt='C#' style='width: 25px; height: 25px;'/>",
                        "C++ <img src='/portfoliowebsite/images/cpp.png' alt='C++' style='width: 25px; height: 25px;'/>",
                        "Java <img src='/portfoliowebsite/images/java.png' alt='Java' style='width: 25px; height: 25px;'/>",
                      ]} 
                      typeSpeed={70} loop />
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '10vh',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(45deg, rgba(2,0,36, 1) 0%, rgba(0, 212, 255, 0.1) 100%)',
              padding: '2vh',
              margin: '10px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Button onClick={() => toggleProjectVisibility(1)} style={{fontSize: '2rem', color: 'yellow'}}>
              {visibleProject === 1 ? 'TO DO' : 'TO DO'}
            </Button>
          </Box>

          {visibleProject === 1 && (
          <Box
            sx={{
              background: 'linear-gradient(45deg, rgba(2,0,36, 0.7) 0%, rgba(0, 212, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            <Grid container justifyContent="center">
              <Typography sx={{textAlign: 'center'}}>
                <div className='todoList'>
                    <div style={{ color: 'white', textAlign: 'center', fontSize: '2rem'}}>To do List: </div>
                      {todoList.map((item, index) => (
                        <li key={index} style={{ textDecoration: completedList.includes(index) ? "line-through" : "none", color: completedList.includes(index) ? 'yellow' : 'white' }}>
                          {item}
                        </li>
                      ))}
                </div>
              </Typography>
            </Grid>
          </Box>
        )}
        </Box>
      </ThemeProvider>
    </motion.div>
  );
}

export default HomeDefault;
