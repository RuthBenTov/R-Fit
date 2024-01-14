import AppBarProps from '../../components/appbar/AppBar'
import './main.scss'
import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

  

const Main = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

    const handleTransition = async()=>{
      await new Promise((resolve)=> setTimeout(resolve,500));

      setIsVisible(false);

      await new Promise((resolve)=> setTimeout(resolve,500));
  
      navigate("/sign-in");
    };

    useEffect(()=>{
    if(!isVisible){
      handleTransition();
    }
  }, [isVisible, navigate]);


  return (
    <div  className={`main ${isVisible ? "visible" : "hidden"}`}>
        <AppBarProps />
        <div className={`content ${isVisible ? 'visible': 'hidden'}`}>
        <h1><span>WORKOUT</span> WITH ME</h1>
        <p>Exercises that will help your road to healthy living, weight loss and stress relief.</p>
        </div>
        <div className='button-content'>
        <Stack direction="row">
      <Button onClick={() => setIsVisible(false)} sx={{backgroundColor:'#54a23c',color:'white', marginLeft: '50px'}} variant="contained">Get started</Button>
    </Stack>
        </div>
        
    </div>
  )
}

export default Main