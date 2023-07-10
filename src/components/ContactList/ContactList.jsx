import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItems from './ContactListItems';
import { ContactListContainer } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const contactsVisible = getVisibleContacts(contacts, filter);
  return (
    <ContactListContainer>
      {contactsVisible.length ? (
        contactsVisible.map(({ id, name, number }) => (
          <ContactListItems key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts</p>
      )}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
