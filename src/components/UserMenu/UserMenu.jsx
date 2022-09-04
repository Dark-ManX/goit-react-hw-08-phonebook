import { useSelector } from "react-redux";
import { Name } from "./UserMenu.styled";

const UserMenu = () => {

    const { name } = useSelector(state => state.auth);

    return (
        <Name>{ name }</Name>
    )
}

export default UserMenu;