import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import { Box } from '@mui/material';
import BackgroundParticles from './BackgroundParticles';
//import CircularProgress from '@mui/material/CircularProgress';

function App() {


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
    <Box>
        <Box>
            <BackgroundParticles/>
        </Box>

        <Box sx={{backgroundColor: "black"}}>
            <NavigationBar/>
        </Box> 
          
    </Box>
  );
}

export default App;
