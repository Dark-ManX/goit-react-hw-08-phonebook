import { Button } from "@mui/material";
import { useState } from 'react';
import { useSignUpMutation } from "redux/authAPI";
import { Input, RegisterForm } from "./styled/RegistrationForm.styled";

const RegistrationForm = () => {

const [addUser] = useSignUpMutation();

const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

    const reset = () => {
        setUserName('');
        setEmail('');
        setPassword('');
}    
    
const handleInput = (e) => {
    const {name, value} = e.target;

    switch (name) {
        case 'name':
            setUserName(value);
            break;

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

const createUser = async (e) => {
    e.preventDefault();
    reset();

        try {
            const newUser = await addUser({name: userName, email, password});
            console.log('User successfully created')
            return newUser;
        }
        catch(error) {
            console.log(error);
        }
    }


    return (

        <RegisterForm onSubmit={createUser}>
            <Input id="standard-basic" label="Name" variant="standard" type="text" name="name" onChange={handleInput}/>
            <Input id="standard-basic" label="Email" variant="standard" type="email" name="email" onChange={handleInput}/>
            <Input id="standard-basic" label="Password" variant="standard" type="password" name="password" onChange={handleInput}/>
        
            <Button variant="contained" color="success" type="submit">Register</Button>
        </RegisterForm>
    )
}

export default RegistrationForm;