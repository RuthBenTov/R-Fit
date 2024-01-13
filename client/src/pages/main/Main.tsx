import AppBarProps from '../../components/appbar/AppBar'
import './main.scss'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

  

const Main = () => {
  return (
    <div  className='main'>
        <AppBarProps />
        <h1><span>WORKOUT</span> WITH ME.</h1>
        <p>Exercises that will help your road to healthy living, weight loss and stress relief.</p>
        <Stack direction="row">
      <Button sx={{backgroundColor:'#54a23c', marginLeft: '50px'}} variant="contained">Get started</Button>
    </Stack>
    </div>
  )
}

export default Main