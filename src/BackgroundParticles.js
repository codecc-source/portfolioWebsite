import React, { useState, useCallback, useEffect } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

function BackgroundParticles() {
    const particlesInit = useCallback(async engine => {
      console.log(engine);
      await loadSlim(engine);
    }, []);
  
    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);
  
    return (
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
                        value: ["random"],
                        animation: {
                            enable: true,
                            speed: 50,
                            sync: true,
                        }
                    },
                    links: {
                        color: "random",
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
                        random: true,
                        speed: 10,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: "120",
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: ["triangle", "circle", "square"],
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}      
        />  
    );
  }
  export default BackgroundParticles;