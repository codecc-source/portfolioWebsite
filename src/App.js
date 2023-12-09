import React, { useState } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';
import BackgroundParticles from './BackgroundParticles';
import Works from './pages/Works';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/HomeDefault'
import zIndex from '@mui/material/styles/zIndex';
//import CircularProgress from '@mui/material/CircularProgress';

function App() {
  const [currentPage, setCurrentPage] = useState('HOME');

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
        return (
          <Box sx={{color: 'blue'}}>
            <h1>HOME page</h1>
          </Box>
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
  <Box className="custom-cursor" sx={{ height: '100vh', width: '100vw' }}>
    <Box>
      <BackgroundParticles/>
    </Box>

    {/*Make the content be on top*/}


    <Box sx={{ backgroundColor: 'black'}}>
      <NavigationBar onPageClick={handlePageClick} />
    </Box>

    <Box sx={{ zIndex: '-1' }}>
      {renderPageContent()}
    </Box>

  </Box>
);
}
export default App;
