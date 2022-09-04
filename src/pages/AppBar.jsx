import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { AppBarContainer, AppBarItem } from './styled/AppBar.styled';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {

    const {name} = useSelector(state => state.auth)
    console.log(name)
    return (
        <>
            <AppBarContainer>
                {!name
                    ? <AppBarItem to='/login' >Log In</AppBarItem>
                    : <AppBarItem to='/logout'>Log Out</AppBarItem>
                }
                {!name 
                    ? <AppBarItem to='/register' >Registration</AppBarItem>
                    : <UserMenu/>}
                {name && (<AppBarItem to='/contacts' >Contacts</AppBarItem>)}
            </AppBarContainer>
            <hr />

            <Outlet />
        </>
    )
}

export default AppBar;