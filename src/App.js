import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';
//import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      console.log(container);
  }, []);

//   useEffect(()=> {
//     const onPageLoad = () => {
//       alert("Page loaded");
//     };

//     if (document.readyState === 'complete') {
//       onPageLoad();
//     } else {
//       window.addEventListener('load', onPageLoad, false);
//       return () => window.removeEventListener('load', onPageLoad);
//     }
//   }, []); //Do some loading animation when page is not fully loaded

  return (
    <div>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          background: {
              color: {
                  value: "#000000",
              },
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 5,
                  },
                  repulse: {
                      distance: 110,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: ["#ffffff", "#0000FF"],
              },
              links: {
                  color: "#0000FF",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 6,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 100,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "square",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}      
    />
          <Box sx={{backgroundColor: "black"}}>
            <NavigationBar/>
          </Box> 
          
  </div>
  );
}

export default App;
