import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pages = ['SignIn', 'SignUp'];

const AppBarProps = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();


  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1e2a' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography onClick={() => navigate("/")}
            variant="h5"
            noWrap
            sx={{
              cursor: 'pointer',
              mr: 142,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            R-FIT
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Menu
              open={Boolean(anchorElNav)}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {navigate(`/${page.toLowerCase()}`)}}>
                  <Typography >{page}</Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <AdbIcon sx={{ mr: 1 }} />
          <Typography
            variant="h5"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
          </Typography>
          <Box sx={{ display: { md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarProps