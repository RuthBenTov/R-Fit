import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputPassword } from '../../components/passwordInput/Password';
import { toast } from "react-toastify";
import {register} from '../../api/userApi'

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
            console.log("the resonse",response);
            

            if(response && response.data.results[0]) {
                if(response.data.results[0].error === "User already exist"){
                    toast.error("User with this name already exists")
                    return;
                } else{

                    toast.success('Registration successful')
                    handleLogin()
                }
            }

        } catch (error) {
            console.error(error)
        }
    }

    const handleLogin = () => {
        navigate('/')
    }

    return ( 
        <>
            <Container sx={{ padding: '0px 4px 35px 3px', border: '1px solid gray', borderRadius: '12px' }}>
                <h2 style={{ color: '#6467d4', marginBottom: '35px', fontSize: '25px' }}>SignUp</h2>
                <Box sx={{ width: '100%' }}>
                    <TextField variant='outlined' className="textField" fullWidth type="text" size="small" value={userName} placeholder="Username" onChange={(ev) => setUserName(ev.target.value)} />
                    <InputPassword onInput={(ev) => setPassword(ev.target.value)} />
                    <Button onClick={handleSignUp} size='small' variant='contained' type='submit' sx={{ backgroundColor: '#6467d4', color: 'white' }}>Signup</Button>
                    <p style={{ paddingBottom: '150px', textAlign: 'center', color: 'gray' }}>Forget your password?</p>
                    <div style={{ padding: '3px 2px', border: "1px solid gray", margin: 'auto', width: '1px', borderRadius: "12px", textAlign: 'center' }}></div>
                    <br />
                    <Button size='small' sx={{ color: '#6467d4' }} onClick={handleLogin} variant='outlined'>Login</Button>
                </Box>
            </Container>
        </>
    )
}

export default SignUp


// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import { Box, Container } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import { InputPassword } from '../../components/passwordInput/Password';
// import { toast } from "react-toastify";

// const SignUp = () => {
//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSignUp = async () => {
//         try {
//             if (!userName || !password) {
//                 toast.info("Please fill all fileds")
//                 return;
//             }
//             const response = await axios.post('http://localhost:3000/API/users/register', { userName, password })

//             if(response.data.error === "User already exist"){
//                 toast.error("User with this name already exists")
//                 return;
//             }
//             toast.success('Registration successful')
//             handleLogin()

//         } catch (error) {
//             console.error(error)
//         }
//     }

//     const handleLogin = () => {
//         navigate('/add-user')
//     }

//     return ( 
//         <>
//             <Container sx={{ padding: '0px 4px 35px 3px', border: '1px solid gray', borderRadius: '12px' }}>
//                 <h2 style={{ color: '#6467d4', marginBottom: '35px', fontSize: '25px' }}>SignUp</h2>
//                 <Box sx={{ width: '100%' }}>
//                     <TextField variant='outlined' className="textField" fullWidth type="text" size="small" value={userName} placeholder="Username" onChange={(ev) => setUserName(ev.target.value)} />
//                     <InputPassword onInput={(ev) => setPassword(ev.target.value)} />
//                     <Button onClick={handleSignUp} size='small' variant='contained' type='submit' sx={{ backgroundColor: '#6467d4', color: 'white' }}>Signup</Button>
//                     <p style={{ paddingBottom: '150px', textAlign: 'center', color: 'gray' }}>Forget your password?</p>
//                     <div style={{ padding: '3px 2px', border: "1px solid gray", margin: 'auto', width: '1px', borderRadius: "12px", textAlign: 'center' }}></div>
//                     <br />
//                     <Button size='small' sx={{ color: '#6467d4' }} onClick={handleLogin} variant='outlined'>Login</Button>
//                 </Box>
//             </Container>
//         </>
//     )
// }

// export default SignUp

