import AdbIcon from '@mui/icons-material/Adb';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AppBarProps = () => {
  const navigate = useNavigate();

  const pages = [
    { name: 'SignIn', path: '/sign-in' },
    { name: 'SignUp', path: '/sign-up' },
  ];

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
            {pages.map((page) => (
              <Button key={page.name} sx={{ my: 2, mx: 1, color: 'white' }} onClick={() => navigate(page.path)}>
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarProps