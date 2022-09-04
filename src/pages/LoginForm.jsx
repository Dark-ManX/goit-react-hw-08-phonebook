import { Button } from '@mui/material';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogInMutation } from "redux/authAPI";
import { Input, LogForm } from "./styled/LoginForm.styled";

const LoginForm = () => {

    const navigate = useNavigate();

    const [userLogin, status] = useLogInMutation();
    const { isLoading } = status;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const credentials = { email, password };

    const handleInput = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }
    }

    const reset = () => {
        setEmail('')
        setPassword('')
    }


    const handleLogIn = (e) => {
        e.preventDefault();
        reset();
     
        try {
            userLogin(credentials).then(data => navigate('/contacts'));
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <LogForm onSubmit={handleLogIn}>
            <Input id="standard-basic" label="Email" variant="standard" type="email" name="email" value={email} onChange = {handleInput}/>
            <Input id="standard-basic" label="Password" variant="standard" type="password" name="password" value={password} onChange = {handleInput}/>
            <Button variant="contained" color="success" type='submit' disabled={isLoading}>Log In</Button>
        </LogForm>
    )
}

export default LoginForm;