import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';
import BackgroundParticles from './BackgroundParticles';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import HomeDefault from './pages/HomeDefault';
//import CircularProgress from '@mui/material/CircularProgress';

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
  <Box className="custom-cursor" sx={{ height: '100vh', width: '100vw', position: 'relative' }}>
    <div style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%' }}>
      <BackgroundParticles />

      <Box sx={{ backgroundColor: 'black' }}>
        <NavigationBar onPageClick={handlePageClick} />
      </Box>

      <Box sx={{ position: 'relative', zIndex: 2 }}>
        {renderPageContent()}
      </Box>
    </div>
  </Box>
);
}

export default App;