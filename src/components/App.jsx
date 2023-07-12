import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selector';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Loading from './Loading';
import { AppContainer, Phonebook, Title } from './App.styled';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Phonebook>Phonebook</Phonebook>
      <ContactForm />
      <Title>Contacts</Title>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
          {loading && <Loading />}
        </>
      ) : loading ? (
        <Loading />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <p>Please add new contact</p>
      )}
    </AppContainer>
  );
}

export default App;
