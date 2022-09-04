import { useLogOutMutation } from 'redux/authAPI';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogOutContainer } from './styled/LogOut.styled';
import Button from '@mui/material/Button';

const LogOut = () => {

    const { token } = useSelector(state => state.auth);
    console.log(token)
    const navigate = useNavigate();
    const [logOut] = useLogOutMutation();
    console.log(logOut);

    const handleClick = (e) => {
        const {textContent} = e.target

        if (textContent.toLowerCase() === 'yes') {
            logOut();
            
            navigate('/login');
        }
    }

    return (
        <LogOutContainer>
            <p>Are you really want to leave?</p>
            {/* <ButtonGroup color="secondary" aria-label="medium secondary button group"> */}
                <Button variant="contained" color="success" onClick={handleClick}>Yes</Button>
                <Button variant="outlined" color="error" onClick={handleClick}>No</Button>
            {/* </ButtonGroup> */}
        </LogOutContainer>
    )
}

export default LogOut;