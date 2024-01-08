import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const ProfilePage = () => {
  return (
    <>
      <Stack >
        <Avatar sx={{ margin: "auto", padding: "40px" }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      </Stack>
      <h2>User name</h2>
      <Container sx={{ padding: '0px 4px 35px 3px', border: '1px solid gray', borderRadius: '12px' }}>
        <ListItemButton >
          <ListItemText primary="Personal Details" />
          <ListItemIcon sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <CreateOutlinedIcon />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CakeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="date" />
        </ListItemButton>
        
        <ListItemButton>
          <ListItemIcon>
            <PhoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="phone" />
        </ListItemButton>
      </Container>
    </>
  )
}

export default ProfilePage
