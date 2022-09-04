import PropTypes from 'prop-types';
import {Item} from './RenderContact.styled';
import { StyledButton } from './RenderContact.styled';
const RenderContact = ({name, number, onDeleteContact}) => {

    return(
        <Item >{name}: {number} <StyledButton variant="contained" color="success" type='button' onClick={onDeleteContact}>Delete</StyledButton></Item>
        )
};

export default RenderContact;

RenderContact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    deleteContact: PropTypes.func,
}