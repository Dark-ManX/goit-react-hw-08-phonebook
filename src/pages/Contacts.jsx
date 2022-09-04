import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactsList from 'components/ContactsList/ContactsList';

const Contacts =  () => {

    return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
    )
}

export default Contacts;

