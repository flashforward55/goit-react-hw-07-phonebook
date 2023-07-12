import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactListItems from './ContactListItems';
import { ContactListContainer } from './ContactList.styled';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ContactListContainer>
      {filteredContacts.length ? (
        filteredContacts.map(({ id, name, phone }) => (
          <ContactListItems key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <p>No contacts</p>
      )}
    </ContactListContainer>
  );
};

export default ContactList;
