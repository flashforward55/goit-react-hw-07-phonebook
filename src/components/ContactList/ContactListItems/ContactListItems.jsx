import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';

const ContactListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>

      <DeleteButton type="submit" onClick={() => contactsDelete(id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItems;
