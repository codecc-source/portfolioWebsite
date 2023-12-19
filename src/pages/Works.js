import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

function Works() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

  const [visibleProject, setVisibleProject] = useState(null);

  const toggleProjectVisibility = (projectId) => {
    setVisibleProject(visibleProject === projectId ? null : projectId);
  };

  const listofFeatures1 = ['Adding notes', 'Using images as notes', 'Reviewing notes', 'Editing notes', 'Clearing notes', 'Exporting notes as DOCX files', 'Saving/Loading notes as JSON files', 'Saving notes as mp3 files (uses GTTS)', 'Minigame like scoring system'];
  const listofFeatures2 = ['Separate login for students/teachers', 'Quiz Taker', 'Attendance Checker', 'Grades Editor', 'Spell Checker', 'Registration'];

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
          <Box
            sx={{
              width: '60%',
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
              <Button onClick={() => toggleProjectVisibility(1)} style={{fontSize: '2rem', color: 'yellow'}}>
                {visibleProject === 1 ? 'THESIS' : 'THESIS'}
              </Button>
          </Box>

          {visibleProject === 1 && (
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
                  <Typography variant="h5" style={{ color: 'yellow' }}>
                    Super Barangay Cleaners: <img src='/portfoliowebsite/images/unity.png' alt='unity' style={{width: '25px', height: '25px'}}/> <br />A Third Person Shooter Game <br />Using Procedural Content Generation Algorithm
                  </Typography>
                </Grid>
                <img
                  src={process.env.PUBLIC_URL + '/images/thesis.png'}
                  alt="Thesis"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Typography variant="h5" style={{ color: 'aquamarine' }}>
                    Computer Science Thesis Project, it is a third person shooter that uses PCG algorithm to create a sense of replayability. It aimed to address the stigma around street cleaners (i.e. street cleaners are not that important etc.), as well as showcase how effective they are at cleaning out the monsters (trash) in our neighbourhoods. <br/><br/>
                    <a style={{color: 'yellow', fontSize: '3rem'}}>Teaser: </a><br/><br/>
                  </Typography>
                </Grid>
                <ReactPlayer
                  url="/images/teaser.mp4"
                  width="80%"
                  height="auto"
                  controls
                  config={{
                    file: {
                      attributes: {
                        controlsList: 'nodownload noremoteplayback',
                      },
                    },
                  }}
                />
              </Grid>
            </Box>
          )}

          <Box
            sx={{
              width: '60%',
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
              <Button onClick={() => toggleProjectVisibility(2)} style={{fontSize: '2rem', color: 'yellow'}}>
                {visibleProject === 2 ? 'Python Reviewer' : 'Python Reviewer'}
              </Button>
          </Box>

          {visibleProject === 2 && (
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
                    Reviewer App Python <img src='/portfoliowebsite/images/python.png' alt='Python' style={{width: '25px', height: '25px'}}/>
                  </Typography>
                </Grid>
                <img
                  src={process.env.PUBLIC_URL + '/images/reviewerApp.png'}
                  alt="Reviewer App"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Typography variant="h5" style={{ color: 'white' }}>
                    A reviewer app made for my S.O. to aid in her studies. Built using python. <br/> 
                    Note: some terms in the app are in local language <br/>
                    Features: <br/>
                    <ul style={{color: 'aquamarine'}}>
                      {listofFeatures1.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          )}

          <Box
            sx={{
              width: '60%',
              background: 'linear-gradient(45deg, rgba(254,254,51, 0.1) 0%, rgba(0, 128, 255, 0.1) 100%)',
              padding: '5vh',
              margin: '20px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
              <Button onClick={() => toggleProjectVisibility(3)} style={{fontSize: '2rem', color: 'yellow'}}>
                {visibleProject === 3 ? 'Quiz Master' : 'Quiz Master'}
              </Button>
          </Box>

          {visibleProject === 3 && (
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
                    Quiz Master Android Studio <img src='/portfoliowebsite/images/java.png' alt='java' style={{width: '25px', height: '25px'}}/>
                  </Typography>
                </Grid>
                <img
                  src={process.env.PUBLIC_URL + '/images/quizMaster.png'}
                  alt="Quiz Master"
                  style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                  <Typography variant="h5" style={{ color: 'white' }}>
                    Android Studios school project. Made using Java <br/>
                    Features: <br/>
                    <ul style={{color: 'aquamarine'}}>
                      {listofFeatures2.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </Typography>
                </Grid>
            </Box>
          )}
        </Box>
      </ThemeProvider>
    </motion.div>
  );
};

export default Works;
