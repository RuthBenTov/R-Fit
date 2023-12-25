import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            if (!userName || !password) {
                throw new Error("Please fill all fileds")
            }
            const response = await axios.post('http://localhost:3000/API/users/register', { userName, password })
            console.log('response:',response.data);
            navigate('/add-user')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>SignUp</h1>
            <div>
                <label>Username:</label>
                <input type="text" value={userName} onChange={(ev) => setUserName(ev.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
            </div>
            <button onClick={handleSignUp}>SignUp</button>
        </>
    )
}

export default SignUp