import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputPassword } from '../../components/passwordInput/Password';
import { toast } from "react-toastify";
import { register } from '../../api/userApi'
import './signUp.scss'
import AppBarProps from '../../components/appbar/AppBar';

const SignUp = () => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            if (!userName || !password) {
                toast.info("Please fill all fileds")
                return;
            }
            const response = await register(userName, password)
            console.log("the resonse", response);

            if (response && response.data.results[0]) {
                if (response.data.results[0].error === "User already exist") {
                    toast.error("User with this name already exists")
                    return;
                } else {

                    toast.success('Registration successful')
                    handleLogin()
                }
            }

        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = () => {
        navigate('/sign-in')
    }

    return (
        <div className='signUp'>
            <AppBarProps />
            <Container sx={{
                width: "30%", padding: '0px 4px 35px 3px', border: '1px solid gray', marginRight: "170px", borderRadius: '12px', textAlign: "center", marginTop: "70px",
                backgroundColor: "rgba(255, 255, 255, 0.4)"
            }}>
                <h2 style={{
                    color: '#413b2b', marginBottom: '35px', fontSize: "45px", fontWeight: "bolder",
                    letterSpacing: ".15em",
                    textShadow: "-3px 6px 1px black"
                }}>Sign Up</h2>
                <Box sx={{ width: '100%' }}>
                    <TextField variant='outlined' className="textField" fullWidth type="text" size="small" value={userName} placeholder="Username" onChange={(ev) => setUserName(ev.target.value)} />
                    <InputPassword onInput={(ev) => setPassword(ev.target.value)} />
                    <Button onClick={handleSignUp} size='small' variant='contained' type='submit' sx={{ backgroundColor: '#413b2b', color: 'white', marginBottom: "30px" }}>Signup</Button>
                    <div style={{ padding: '3px 2px', border: "1px solid gray", margin: 'auto', width: '1px', borderRadius: "12px", textAlign: 'center' }}></div>
                    <br />
                    <Button size='small' sx={{ backgroundColor: '#413b2b' }} onClick={handleLogin} variant='contained'>Login</Button>
                </Box>
            </Container>
        </div>
    )
}

export default SignUp
