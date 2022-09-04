import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from 'redux/contactsAPI'; 
import RenderContact from 'components/RenderContact/RenderContact';

const ContactsList = () => {

    const {data:contacts, error, isLoading} = useGetContactsQuery();
    console.log(useGetContactsQuery());
    const filter = useSelector(state => state.filter);

    const getFilteredData = (data) => {

        if (data) {
            return contacts.filter(({ name }) => name.toLowerCase().includes(data));
        }
        return contacts;
    };

    const filteredContacts = getFilteredData(filter);    

    const [removeContact] = useDeleteContactMutation();

    const deleteContact = (itemId) => removeContact(itemId);



    return (
        <>
            {contacts && (
                <ul>
                {filteredContacts.map(({id, name, phone}) => (<RenderContact key={id} name={name} number={phone} onDeleteContact={() => deleteContact(id)}/>))}
                </ul>
            )}

            {error && (<p>{error}</p>)}

            {isLoading && (<p>Loading...</p>)}
        </>
    )
}


export default ContactsList;

ContactsList.propTypes = {
    data: PropTypes.array,
    id: PropTypes.string,
}
