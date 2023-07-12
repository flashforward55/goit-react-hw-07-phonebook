import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { addContact } from 'redux/operations';
import { Form, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = event => {
    event.preventDefault();
    if (checkIfContactExists()) {
      reset();
      return alert(`Number: ${name} is already in phonebook`);
    }
    addNewContact();
  };
  const checkIfContactExists = () =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const addNewContact = () => {
    const newContact = {
      name,
      phone,
    };
    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setPhone('');
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
        onChange={event => setPhone(event.target.value)}
        name="phone"
        placeholder="Phone number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

export default ContactForm;
