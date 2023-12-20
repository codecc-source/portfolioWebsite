import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const pages = ['WORKS', 'ABOUT', 'CONTACT'];

function NavigationBar({ onPageClick }) {
  const [clickedPage, setClickedPage] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handlePageClick = (page) => {
    setClickedPage(page);
    handleCloseNavMenu();
    onPageClick(page === 'HOME' ? 'HOME' : page);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    typography: {
      fontFamily: 'Silkscreen, sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ alignItems: 'center' }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              style={{ width: '150px', height: '100px' }}
              alt="Logo"
            />
          </Box>

          <Typography
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              fontSize: '4rem',
              '&:hover': {
                color: '#FFFF00',
              },
            }}
            onClick={() => handlePageClick('HOME')}
          >
            HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                opacity: '0.8',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handlePageClick(page)}>
                  <Typography
                    textAlign="center"
                    sx={{
                      fontSize: '1rem',
                      color: 'black',
                      ':hover': { color: 'blue' },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img
              src={process.env.PUBLIC_URL + '/images/logo.png'}
              style={{ width: '90px', height: '60px' }}
              alt="Logo"
            />
          </Box>

          <Typography
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: '3rem',
              ':hover': {
                color: '#FFFF00',
              },
            }}
            onClick={() => handlePageClick('HOME')}
          >
            HOME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageClick(page)}
                sx={{
                  my: 2,
                  color: clickedPage === page ? 'black' : 'white',
                  backgroundColor:
                    clickedPage === page ? 'rgba(255, 255, 0, 1)' : 'transparent',
                  display: 'block',
                  fontSize: '1.5rem',
                  '&:hover': {
                    color: 'black',
                    backgroundColor: 'rgba(255, 255, 0, 0.7)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default NavigationBar;