import { AppContainer, Phonebook, Title } from './App.styled';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loading from './Loading';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';
import { fetchContacts } from 'redux/operations';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          {loading === true && <Loading />}
          <ContactList />
        </>
      ) : loading === true ? (
        <Loading />
      ) : (
        <p>
          Looks like you don`t have any contacts yet or just clear them all.
          Please add new contact🤔
        </p>
      )}
    </AppContainer>
  );
}

export default App;
