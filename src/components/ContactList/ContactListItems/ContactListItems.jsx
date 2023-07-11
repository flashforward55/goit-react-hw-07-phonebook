import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';

const ContactListItems = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{phone}</ContactNumber>

      <DeleteButton type="submit" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItems;
