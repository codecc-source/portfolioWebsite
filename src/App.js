import React, { useState, useCallback } from 'react';
import './App.css';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';

function App() {
  const [activeSlide, setActiveSlide] = useState('HOME');

  const handleButtonClick = (slide) => {
    setActiveSlide(slide);
  };

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      console.log(container);
  }, []);

  return (
    <div>
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#0d47a1",
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
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
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
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
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
          

          <div  style={{zIndex : 1000, display: 'flex'}}>
            <div>
         {/* <div className="container-fluid">
          <div className="row">
            <div className="black-bg d-flex align-items-center" style={{width: '100%'}}>
              <div className='col-lg-6'>
                <img src="../images/logo.png" alt="Logo" style={{ width: '12%' }} />
              </div>
              <div className='col-lg-6 d-flex justify-content-end'>
                <button className='toplinks' onClick={() => handleButtonClick('HOME')}>HOME</button> 
                <button className='toplinks' onClick={() => handleButtonClick('WORKS')}>WORKS</button>
                <button className='toplinks' onClick={() => handleButtonClick('ABOUT')}>ABOUT</button>
                <button className='toplinks' onClick={() => handleButtonClick('CONTACT')}>CONTACT</button> 
              </div>
            </div>
          </div>
        </div>

        <div>
          {activeSlide === 'HOME' && <div className='placeholderShiz'>Content for HOME</div>}
          {activeSlide === 'WORKS' && <div className='placeholderShiz'>Content for WORKS</div>}
          {activeSlide === 'ABOUT' && <div className='placeholderShiz'>Content for ABOUT</div>}
          {activeSlide === 'CONTACT' && <div className='placeholderShiz'>Content for CONTACT</div>}
        </div>  */}

        <div className="socialLinks text-center">
          <div>
            <a style={{ color: 'rgb(215, 89, 246)' }}>Contact Us @</a>
            <a href="#">FacebookCompanyLink</a>
            <a href="#">InstagramCompanyLink</a>
            <a href="#">GMailCompanyLink</a>
            <a href="#">LinkedInCompanyLink</a>
          </div>
        </div>
      </div>
          </div>
    </div>
  );
}

export default App;
