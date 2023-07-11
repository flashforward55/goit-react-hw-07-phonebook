import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from 'redux/operations';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      reset();
      return alert(`Number: ${name} is already in phonebook`);
    }
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <Input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Input
        type="tel"
        value={phone}
        onChange={event => setNumber(event.target.value)}
        name="number"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func,
};

export default ContactForm;
