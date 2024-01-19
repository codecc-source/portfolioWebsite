import React, {useState, useEffect} from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import {Box} from '@mui/material';
import BackgroundParticles from './BackgroundParticles';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import HomeDefault from './pages/HomeDefault';
import AnimatedCursor from 'react-animated-cursor';
import {motion, AnimatePresence} from 'framer-motion';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');
  const [showCursor, setShowCursor] = useState(true);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handlePageClick = (page) => {
    setCurrentPage(page);
 };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'WORKS':
        return <Works />;
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <HomeDefault />;
   }
 };

  useEffect(() => {
    const handleResize = () => {
      setShowCursor(window.innerWidth > 700);
   };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
   };
 }, []);

  useEffect(() => {
    const imgTimeout = setTimeout(() => {
      setIsImageVisible(true);

      const hideTimeout = setTimeout(() => {
        setIsImageVisible(false);
     }, 5000);

      return () => {
        clearTimeout(hideTimeout);
     };
   }, 60000); //to set when the image appears after Xseconds

    return () => {
      clearTimeout(imgTimeout);
   };
 }, []);

  return (
    <div>
      {showCursor && (
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
            '.link',
          ]}
        />
      )}
      <Box sx={{height: '100vh', width: '100vw', position: 'relative'}}>
        <div style={{zIndex: 1, width: '100%', height: '100%', overflow: 'scroll'}}>
          <BackgroundParticles />

          <Box sx={{backgroundColor: 'black'}}>
            <NavigationBar onPageClick={handlePageClick} />
          </Box>

          <Box sx={{position: 'relative', zIndex: 2}}>
            <AnimatePresence>
              <motion.div
                key={currentPage}
                initial={{width: 0}}
                animate={{width: '100%'}}
                exit={{x: window.innerWidth, transition: {duration: 0.1}}}
              >
                {renderPageContent()}
                {isImageVisible && (
                  <motion.img
                    id='myImage'
                    src='/portfoliowebsite/images/red.png'
                    style={{
                      width: '100px',
                      height: '100px',
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                   }}
                    alt='red'
                    animate={{
                      left: window.innerWidth - 100,
                      rotate: 360,
                      transition: {duration: 5, ease: 'linear'},
                   }}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default App;
