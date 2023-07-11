import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItems from './ContactListItems';
import { ContactListContainer } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/selector';

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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
