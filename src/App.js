import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';
import BackgroundParticles from './BackgroundParticles';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import HomeDefault from './pages/HomeDefault';
import AnimatedCursor from 'react-animated-cursor';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'WORKS':
        return <Works/>;
      case 'ABOUT':
        return <About/>;
      case 'CONTACT':
        return <Contact/>;
      default:
        return (
         <HomeDefault/>
        );
    }
  };

return (
  <div>
    <AnimatedCursor
      innerSize={10}
      outerSize={35}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    <Box sx={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <div style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}>
        <BackgroundParticles />

        <Box sx={{ backgroundColor: 'black' }}>
          <NavigationBar onPageClick={handlePageClick} />
        </Box>

        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              {renderPageContent()}
            </motion.div>
          </AnimatePresence>
        </Box>
      </div>
    </Box>
  </div>
);
}

export default App;